const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        content: "./content.ts",
        background: "./background.ts"
    },
    output: {
        clean: true,
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
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
        new CopyWebpackPlugin({
            patterns: [
                {from: path.join(__dirname, "/manifest.json"), to: path.join(__dirname, "/dist")},
                {from: path.join(__dirname, "/src/css"), to: path.join(__dirname, "/dist/css")},
                {from: path.join(__dirname, "/src/icons"), to: path.join(__dirname, "/dist/icons")},
            ]
        })
    ],
    devtool: "hidden-source-map",
    mode: "development",
}