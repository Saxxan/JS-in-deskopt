const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js",
      },
      entry: {
        main: "./src/index.js",
      },
      devServer: {
        static: './',
        port: 9001,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
      devtool: "inline-source-map",    
};