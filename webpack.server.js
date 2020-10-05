// Declare variable for using
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

// Declare input and output path
const BUILD_DIR = path.resolve(__dirname, "build");
const SERVER_DIR = path.resolve(__dirname, "ServerApp");

// Configure input and output path when building resource
const config = {
  target: "node",
  entry: SERVER_DIR + "/Server.js",
  output: {
    path: BUILD_DIR,
    filename: "server-bundle.js",
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
