var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Path = require("path");

module.exports = {
    entry: {
        'polyfills': "./src/polyfills.ts",
        'app.bundle': './src/app/main.ts'
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
            //{
            //    test: /\.less$/,
            //    exclude: /node_modules/,
            //    loader: 'raw-loader!less-loader'
            //}
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new Webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            Path.resolve(__dirname, "src"),
            {} // a map of your routes
        )
    ]
};