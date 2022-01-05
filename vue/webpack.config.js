const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",
    // mode: "production",
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "build")
    }
};