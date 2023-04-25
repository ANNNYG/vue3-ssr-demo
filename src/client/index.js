import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import App from "../App.vue";
import createRouter from "../router";

let app = createApp(App);
const router = createRouter(createWebHistory());
app.use(router);

const pinia = createPinia();
app.use(pinia);

// 等路由加载好再挂载
router.isReady().then(() => {
  app.mount("#app");
});
