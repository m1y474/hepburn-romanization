const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV ?? "development",
  entry: "./index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".json"],
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [{ from: `${__dirname}/public/spells.json`, to: `${__dirname}/dist/spells.json` }],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
};
