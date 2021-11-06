const sharedConfig = require("./webpack.config");
const webpackHelper = require("./webpackHelper");

module.exports = {
    ...sharedConfig,
    plugins: webpackHelper.createPlugins({
        portfolio: "https://code-star.github.io/nx-reference-portfolio",
    }),
};
