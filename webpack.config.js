const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: "./src/background/background.ts",
    popup: "./src/popup/popup.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/popup/popup.html",
          to: "popup.html",
        },
        {
          from: "src/popup/popup.css",
          to: "popup.css",
        },
        {
          from: "src/manifest.json",
          to: "manifest.json",
        },
        {
          from: "src/options/options.html",
          to: "options.html",
        },
        {
          from: "src/assets",
          to: "assets",
        },
      ],
    }),
  ],
};
