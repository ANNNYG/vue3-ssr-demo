const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    // 添加扩展名
    extensions: [".js", ".json", ".wasm", ".vue"],
  },
  externals: [nodeExternals()], // 排除node-modules中的一些包 针对node环境s
};
