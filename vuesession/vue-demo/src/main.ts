import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import parentComponent from "./components/NestedComponent/parentComponent.vue";
import EventBindingVue from "./components/DataBIinding/EventBinding.vue";
import stringInterpolatio from "./components/DataBIinding/Interpolation.vue";
import twowaydatabinding from "./components/DataBIinding/TwoWayDataBinding.vue";
import directivesVue from "./components/SrtuctralDirectives/DirectivesVue.vue";
import eventBinding from "./components/DataBIinding/EventBinding.vue";
import eagerComponent from './components/routing/eagerComponent.vue'
const app = createApp(App);
const router = createRouter({
  routes: [
    { path: "/nestedComponents", component: parentComponent },
    { path: "/eventBinding", component: eventBinding },
    { path: "/stringInterpolation", component: stringInterpolatio },
    { path: "/twoWay", component: twowaydatabinding },
    { path: "/directives", component: directivesVue },
    { path: "/routing", component: eagerComponent },
  ],
  history: createWebHistory(),
});

app.use(createPinia());
app.use(router);
app.mount("#app");
