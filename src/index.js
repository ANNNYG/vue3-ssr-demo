import { createSSRApp } from "vue";

import App from "./App.vue";

// 作用：避免夸请求状态的污染
// 通过函数来返回app实例，每次请求都会创建一个新的app实例
const createApp = () => {
  const app = createSSRApp(App);
  return app;
};

export default createApp;
