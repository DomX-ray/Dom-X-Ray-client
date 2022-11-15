const { merge } = require("webpack-merge");
const portFinderSync = require("portfinder-sync");
const path = require("path");

const commonConfiguration = require("./webpack.common.js");

const PORT = 8000;
const MODE = process.env.NODE_ENV || "development";

module.exports = merge(commonConfiguration, {
  mode: MODE,
  devtool: "source-map",
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    compress: true,
    hot: true,
    port: portFinderSync.getPort(PORT),
  },
});
