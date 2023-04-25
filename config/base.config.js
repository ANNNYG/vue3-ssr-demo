const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
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
};
