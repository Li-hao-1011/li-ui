import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
    },
  ],
});
createApp(App).use(router).mount("#app");
