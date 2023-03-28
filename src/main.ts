import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Lihao from "./components/Lihao.vue";
import Lihao2 from "./components/Lihao2.vue";

import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Lihao,
    },
    {
      path: "/2",
      component: Lihao2,
    },
  ],
});
createApp(App).use(router).mount("#app");
