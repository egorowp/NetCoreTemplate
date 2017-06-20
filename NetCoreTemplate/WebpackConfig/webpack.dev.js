var Path = require('path');
var WebpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonConfig = require("./webpack.common.js");

module.exports = WebpackMerge(CommonConfig, {
    devtool: "source-map",

    output: {
        path: Path.resolve(__dirname, '../wwwroot/dist'),
        publicPath: 'http://localhost:8080/',
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
});