const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        content: `./content.js`,
        background: "./background.js"
    },
    output: {
        clean: true,
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    devtool: "hidden-source-map",
    mode: "development",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: path.join(__dirname, "/manifest.json"), to: path.join(__dirname, "/dist")},
                {from: path.join(__dirname, "/src/library"), to: path.join(__dirname, "/dist/library")},
                {from: path.join(__dirname, "/src/css"), to: path.join(__dirname, "/dist/css")},
                {from: path.join(__dirname, "/src/icons"), to: path.join(__dirname, "/dist/icons")},
            ]
        })
    ],
}