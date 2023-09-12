import { createRouter, createWebHashHistory } from "vue-router";
import { useAppStore } from "@/store/app";
import { useConfig } from "@/global";
const config = useConfig();

import Index from "../views/Index.vue";

const routes = [
  {
    alias: "/",
    path: "/Index",
    component: Index,
    meta: {
      title: "首页",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = (config.page_title + " " + to.meta.title) as string;
  } else {
    document.title = config.page_title;
  }

  const store = useAppStore();
  if (to.path === "/Index" || to.path === "/") {
    next();
  } else {
    if (store.token) {
      localStorage.setItem("token", store.token);
      next();
    } else {
      next("/");
    }
  }
});

export default router;
