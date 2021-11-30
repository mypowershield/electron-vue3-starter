import { createWebHistory, createRouter } from "vue-router";

import index from "@/views/index.vue";
import error404 from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/index.html",
    name: "index 2",
    component: index,
  },
  {
    path: "/:catchAll(.*)",
    component: error404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
