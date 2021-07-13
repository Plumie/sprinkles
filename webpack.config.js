let path = require('path');

module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: "sprinkles.min.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
};
