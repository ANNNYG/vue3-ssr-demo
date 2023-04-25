## 一个简易的 SSR 项目

用于学习 SSR 相关知识

拉取代码 npm start start 就可以用了

很简易的一个基于 vue 的 SSR 初步框架，没有什么太多功能

有基本的路由

加入了 pinia

使用方法
打包客户端后打服务端后 run start

`npm run build:server`
`npm run build:client`
`npm run start`

## SSR

先服务端返回一个 HTML

此时页面呈现只有静态文件，没有 spa 应用相关的交互效果

浏览器监测到 script 标签后，继续发送请求

然后再返回打包好的客户端文件（水合），水合后网页后就可以有动态的交互效果

搭建了一个简易的 ssr 项目
