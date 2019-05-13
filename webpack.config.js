module.exports = {
    devtool: 'source-map',
    entry:  "./app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    }
};
