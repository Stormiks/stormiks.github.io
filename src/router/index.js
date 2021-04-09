import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("p-views/Home.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "public-layout"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
