let express = require("express");
let server = express();
import { renderToString } from "vue/server-renderer";
import { createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";

import createApp from "../index.js";
import createRouter from "../router";

// 静态资源的部署
server.use(express.static("build"));

server.get("/*", async (req, res) => {
  const app = createApp();

  // 安装路由
  const router = createRouter(createMemoryHistory());
  app.use(router);
  await router.push(req.url || "/"); // 等待页面跳转好
  await router.isReady(); // 等待路由加载完成，再渲染页面

  // pinia
  const pinia = createPinia();
  app.use(pinia);

  let appString = await renderToString(app);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Vue3 Server Render</h1>
    <div id="app">
      ${appString}
    </div>
    <script src='/client/bundle.js'></script>
  </body>
  </html>
  `);
});

server.listen(3001, () => {
  console.log("开始监听3001端口");
});
