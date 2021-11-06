const webpackHelper = require("./webpackHelper");

module.exports = {
    output: {
        uniqueName: "demo",
        publicPath: "auto",
    },
    optimization: {
        runtimeChunk: false,
        minimize: false,
    },
    resolve: {
        alias: {
            ...webpackHelper.sharedMappings.getAliases(),
        },
    },
    plugins: webpackHelper.createPlugins({
        portfolio: "http://localhost:4201",
    }),
};
