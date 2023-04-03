/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ILoopbackClient } from "../network/ILoopbackClient";
import { AuthorizationUrlRequest } from "./AuthorizationUrlRequest";

/**
 * Request object passed by user to configure acquireTokenInteractive API
 *
 * - openBrowser             - Function to open a browser instance on user's system.
 * - scopes                  - Array of scopes the application is requesting access to.
 * - successTemplate:        - Template to be displayed on the opened browser instance upon successful token acquisition.
 * - errorTemplate           - Template to be displayed on the opened browser instance upon token acquisition failure.
 * - loopbackClient          - Custom implementation for a loopback server to listen for authorization code response.
 * @public
 */
export type InteractiveRequest = Pick<AuthorizationUrlRequest, "authority"|"correlationId"|"claims"|"azureCloudOptions"|"account"|"extraQueryParameters"|"tokenQueryParameters"|"extraScopesToConsent"|"loginHint"|"prompt"> & {
    openBrowser: (url: string) => Promise<void>;
    scopes?: Array<string>;
    successTemplate?: string;
    errorTemplate?: string;
    loopbackClient?: ILoopbackClient
};
