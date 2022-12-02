const { merge } = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonConfiguration = require("./webpack.common.js");

const MODE = process.env.NODE_ENV || "production";

module.exports = merge(commonConfiguration, {
  mode: MODE,
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.resolve(process.cwd(), "build/**/*"),
      ],
    }),
  ],
});
