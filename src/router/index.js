import Vue from "vue";
import VueRouter from "vue-router";
import ChoosePage from "../views/ChoosePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ServicePage from "../views/ServicePage.vue";
import TeamPage from "../views/TeamPage.vue";
import ContactPage from "../views/ContactPage.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/services",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/team",
    name: "TeamPage",
    component: TeamPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/",
    name: "HomePage",
    meta: { layout: "HomeLayout" },
    component: HomePage,
  },
  {
    path: "/choose",
    name: "ChoosePage",
    component: ChoosePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
