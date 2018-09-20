const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: "babel-loader"},
            {test: /\.scss$/, 
                use: [  
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
            }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html"
        })
    ]
};