// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    scrollerfx: "./src/index.js",
    "scrollerfx-compat": "./src/index.js", // Add the same entry point for the es5 bundle
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./test/index.html", // Path to your index.html template
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/scrollerfx.css", to: "." }, // Adjust the source and destination paths
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        include: /scrollerfx/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
