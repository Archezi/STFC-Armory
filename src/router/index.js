import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/ShipDetail.vue";
import Missions from "../views/Missions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/missions",
    name: "Missions",
    component: Missions,
  },
  {
    path: "/ships",
    name: "Ships",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Ships.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
