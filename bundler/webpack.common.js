const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "..", "src", "index.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "public", "index.html"),
      meta: {
        viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
      },
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "..", "src"),
        exclude: /(node_modules)|(dist)/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
