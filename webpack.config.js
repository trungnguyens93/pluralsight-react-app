// Declare variable for using
const webpack = require("webpack");
const path = require("path");

// Declare input and output path
const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "dist");
const PUBLIC_DIR = path.resolve(__dirname, "public");

// Configure input and output path when building resource
const config = {
  entry: APP_DIR + "/index.js",
  // Thuc hien viec open trang voi cong 9000 khi thuc hien bundle webpack
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        // Ung dung Bable cho tat ca cac file *.js
        test: /\.js?$/,
        loader: "babel-loader",
        // Yeu cau Babel khong bao gom cac phan trong node-modules
        exclude: /node-modules/,
        options: {
          presets: [
            "react",
            "stage-2",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};

module.exports = config;
