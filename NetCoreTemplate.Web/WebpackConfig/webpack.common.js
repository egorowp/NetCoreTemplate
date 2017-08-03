var Webpack = require("webpack");
var Path = require("path");

module.exports = {
    entry: {
        'polyfills': "./Scripts/polyfills.ts",
        'app.bundle': './Scripts/app/main.ts'
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "awesome-typescript-loader",
                    "angular2-template-loader",
                    "angular-router-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'raw-loader!less-loader'
            }
        ]
    },

    plugins: [
        new Webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            Path.resolve(__dirname, "src"),
            {} 
        )
    ]
};