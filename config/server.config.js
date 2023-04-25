const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { merge } = require("webpack-merge");

const baseConfig = require("./base.config");

module.exports = merge(baseConfig, {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build/server"),
  },
  externals: [nodeExternals()], // 排除node-modules中的一些包 针对node环境s
});
