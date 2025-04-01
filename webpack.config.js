const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/bootstrap.tsx",
  output: {
    path: path.resolve(__dirname, ".dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, ".dist"),
    },
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        ButtonHost: "remoteApp@http://localhost:3001/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
    ],
  },
};
