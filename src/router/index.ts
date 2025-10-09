import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Compare from "../pages/Compare.vue";
import PopUp from "../pages/Pop-up.vue";
import DefaultLayout from "../layouts/defaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "compare", name: "Compare", component: Compare },
    ],
  },
  { path: "/pop-up", name: "Pop Up", component: PopUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
