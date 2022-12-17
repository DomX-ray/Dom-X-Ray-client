const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

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
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      SERVER_URL: JSON.stringify(process.env.SERVER_URL),
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
