const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["src", "node_modules"],
    alias: {
      src: path.resolve(__dirname, "src")
    },
    enforceExtension: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
