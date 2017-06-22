var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Path = require("path");

module.exports = {
    entry: {
        'polyfills': "./src/polyfills.ts",
        //'vendor': "./src/vendor.ts",
        'app.bundle': './src/app/main.ts'//,
        //'account.app.bundle': './src/apps/account/account.app.module.ts'
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
            }//,
            //{
            //    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            //    loader: "file-loader?name=assets/[name].[hash].[ext]"
            //},
            //{
            //    test: /\.(css|scss)$/,
            //    use: ["to-string-loader"].concat(ExtractTextPlugin.extract({
            //        fallback: "style-loader",
            //        use: ["css-loader?sourceMap", 'sass-loader?sourceMap']
            //    }))
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
        )//,

        //new Webpack.optimize.CommonsChunkPlugin({
        //    name: ["main.app.bundle", "account.app.bundle", "vendor", "polyfills"]
        //})
    ]
};