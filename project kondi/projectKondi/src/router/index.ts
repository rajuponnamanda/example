import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Interpolation from "../components/Interpolation.vue";
import dashBoard from "../components/dashBoard.vue";
import eventbinding from "../components/EventBinding.vue";
import DataBinding from "../components/DataBinding.vue";
import Twowaydatabinding from "../components/TwoWayDataBinding.vue";

let ROUTES:RouteRecordRaw[] = [ 
  {
    path:'/interpolation',
    name:'interpolation',
    component: Interpolation
  },
  {
    path:'/Dashboard',
    name:'Dashboard',
    component:dashBoard
  },
  {
  path:'/EventBinding',
  name:'EventBinding',
  component:eventbinding
  },
  {
    path:'/DataBinding',
    name:'DataBinding',
    component:DataBinding
  },
  {
    path:'/Twowaydatabinding ',
    name:'twowaydatabinding',
    commponent:Twowaydatabinding 
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES
});

export default router;
