/// <binding ProjectOpened='Run - Development' />

var Environment = (process.env.NODE_ENV || "development").trim();

if (Environment === "development") {
    module.exports = require('./WebpackConfig/webpack.dev.js');
} else {
    module.exports = require('./WebpackConfig/webpack.prod.js');
}
