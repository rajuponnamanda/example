# Token caching in MSAL Node

When MSAL Node acquires a token, it caches it in memory for future usage. MSAL Node manages the token lifetime and refreshing for you. APIs like `acquireTokenSilent()` retrieves the access tokens from the cache for a given account:

```javascript
const msal = require('@azure/msal-node');

// Create msal application object
const cca = new msal.ConfidentialClientApplication({
    auth: {
        clientId: "Enter_the_Application_Id_Here", // e.g. "b1b60dca-c49d-496e-9851-xxxxxxxxxxxx" (guid)
        authority: "https://login.microsoftonline.com/Enter_the_Tenant_Info_Here", // e.g. "common" or your tenantId (guid)
        clientSecret: "Enter_the_Client_Secret_Here" // obtained during app registration
    }
});

/**
* login* and acquireToken* APIs return an account object containing "homeAccountId"
* you should keep a record of this in your app and use it later on when calling acquireTokenSilent
* For more, see: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/accounts.md
*/
const someUserHomeAccountId = "Enter_User_Home_Account_Id";

const msalTokenCache = cca.getTokenCache();
const account = await msalTokenCache.getAccountByHomeId(someUserHomeAccountId);

const silentTokenRequest = {
    account: account,
    scopes: ["user.read"],
};

cca.acquireTokenSilent(silentTokenRequest).then((response) => {
    // do something with response
}).catch((error) => {
    // catch and handle errors
});
```

In production, you would most likely want to serialize and persist the token cache. Depending on the type of application, you can:

* Desktop apps, console apps (public clients):
  * Use [MSAL Node Extensions](../../../extensions/msal-node-extensions/README.md), which provides persistence and encryption at rest solutions on Windows, Linux and Mac OS
* Web apps, web APIs, daemon apps (confidential client):
  * MSAL's in-memory token cache does not scale for production. Use the [distributed token caching](#performance-and-security) pattern to persist the cache in your choice of storage environment (Redis, MongoDB, SQL databases etc. -keep in mind that you can use these in tandem *e.g.* a Redis-like memory cache as a first layer of persistence, and a SQL database as a second, more stable persistence layer)

## Cache in memory

If you choose not to persist the cache, the `TokenCache` interface is still available to access the tokens cached in memory. The lifetime of in-memory cache is the same as MSAL instance. If the MSAL instance restarts, the cache is erased when the process lifecycle finishes. We recommend persisting the cache with encryption for all real life applications both for security and desired cache longevity.

> :warning: Please note that the default in-memory cache is not scalable for server-side applications and performance will degrade after holding a few 100 tokens in cache. For web app and web API scenarios, this approximates to serving a few 100 users. For daemon app scenarios using client credentials grant to call other apps, this means a few 100 tenants. See [performance](#performance-and-security) below for more.

## Persistence

MSAL Node fires events when the cache is accessed, apps can choose whether to serialize or deserialize the cache. This often constitutes two actions:

1. Deserialize the cache from disk to MSAL's memory before accessing the cache
2. If the cache in memory has changed, serialize the cache back

For that, MSAL accepts a custom cache plugin in [configuration](./configuration.md). This should implement [ICachePlugin](https://azuread.github.io/microsoft-authentication-library-for-js/ref/interfaces/_azure_msal_common.icacheplugin.html):

```typescript
interface ICachePlugin {
    beforeCacheAccess: (tokenCacheContext: TokenCacheContext) => Promise<void>;
    afterCacheAccess: (tokenCacheContext: TokenCacheContext) => Promise<void>;
}
```

* If you are developing a public client app (such as desktop, headless etc.), [MSAL Node Extensions](../../../extensions/msal-node-extensions/README.md) handles this for you.
* If you are developing a confidential client app, you should persist the cache via a separate service, since a single, *per-server* cache instance isn't suitable for a cloud environment with many servers and app instances.

> :warning: We strongly recommend to encrypt the token cache when persisting it on disk. Again, for public client apps, this is offered out-of-box with [MSAL Node Extensions](../../../extensions/msal-node-extensions/README.md). For confidential clients however, you are responsible for devising an appropriate encryption solution.

## Performance and security

On public client apps, [MSAL Node Extensions](../../../extensions/msal-node-extensions/README.md) ensures performance and security for you.

On confidential client applications that handle users (web apps that sign in users and call web APIs, and web APIs calling downstream web APIs), there can be many users and the users are processed in parallel. Our recommendation is to serialize one cache blob per user. Use a key for partitioning the cache (*i.e.* **partition key**), such as:

* For web apps: **homeAccountId** (if on ADFS, use **localAccountId** instead)
* For multi-tenant daemon apps using client credentials grant: **tenantId** (or rather, `<clientId>.<tenantId>`)
* For web APIs calling other web APIs using OBO: hash of the incoming access token from the user (i.e. the token which will subsequently be exchanged for an OBO token)

MSAL Node provides the [DistributedCachePlugin](https://azuread.github.io/microsoft-authentication-library-for-js/ref/classes/_azure_msal_node.distributedcacheplugin.html) class for confidential clients, which implements the [ICachePlugin](https://azuread.github.io/microsoft-authentication-library-for-js/ref/interfaces/_azure_msal_common.icacheplugin.html). An instance of `DistributedCachePlugin` requires:

* a **client interface**, which implements `get` and `set` operations on the persistence server (Redis, MySQL etc.).
* a **partition manager**, for reading from and writing to cache with respect to a given **partition key**.

Please refer to the [RedisTestApp](../../../samples/msal-node-samples/RedisTestApp/README.md) for a sample implementation.

> :bulb: We recommend you to obtain performance metrics for cache operations, such as **cache retrieval duration** and **cache hit ratios** in your applications. This would give you a reliable picture of how your app scales over time. For instance, to measure how much time MSAL spends in `acquireToken*` calls, you can use Node's [performance measurement API](https://nodejs.org/api/perf_hooks.html)s along with the `fromCache` property in [AuthenticationResult](https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#authenticationresult) class:
>
> ```javascript
>    const { PerformanceObserver, performance } = require('node:perf_hooks');
>
>    const perfObserver = new PerformanceObserver((items) => {
>        items.getEntries().forEach((entry) => {
>            console.log(entry);
>        })
>    });
>
>    perfObserver.observe({ entryTypes: ["measure"], buffer: true });
>
>    // ...
>
>    performance.mark("acquireTokenSilent-start");
>    const tokenResponse = await msalInstance.acquireTokenSilent({
>        account: account,
>        scopes: ["User.Read"],
>    });
>    performance.mark("acquireTokenSilent-end");
>
>    const measurementName = tokenResponse.fromCache ? "acquireTokenSilent-fromCache" : "acquireTokenSilent-fromNetwork";
>    performance.measure(measurementName, "acquireTokenSilent-start", "acquireTokenSilent-end");
> ```
>
> You should collect these along with the performance metrics generated by your storage solution (e.g. Redis) used for persistence.

## More information

* [(Sample) Public client app using MSAL Node Extensions](../../../extensions/samples/msal-node-extensions/index.js)
* [(Sample) Confidential client Express MVC web app with distributed token cache](../../../samples/msal-node-samples/RedisTestApp/README.md)
* [(Docs) Token cache serialization](https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/wiki/token-cache-serialization)
* [(Docs) App scenarios and authentication flows](https://docs.microsoft.com/azure/active-directory/develop/authentication-flows-app-scenarios)
