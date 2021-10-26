const rootMain = require("../../../.storybook/main");
const rootWebpackConfig = require("../../../.storybook/webpack.config");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nrwl/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nrwl/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath =
    process.env.NX_TSCONFIG_PATH ??
    path.join(__dirname, "../../../tsconfig.base.json");

const workspaceRootPath = path.join(__dirname, "../../../");
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    tsConfigPath,
    [
        /* mapped paths to share */
    ],
    workspaceRootPath
);

module.exports = {
    ...rootMain,

    core: { ...rootMain.core, builder: "webpack5" },

    stories: [
        ...rootMain.stories,
        "../src/app/**/*.stories.mdx",
        "../src/app/**/*.stories.@(js|jsx|ts|tsx)",
        // Aggregate other storybook instances into App storybook
        "../../../libs/ui/src/lib/**/*.stories.mdx",
        "../../../libs/ui/src/lib/**/*.stories.@(js|jsx|ts|tsx)",
        "../../../libs/shared/**/src/lib/**/*.stories.mdx",
        "../../../libs/shared/**/src/lib/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [...rootMain.addons],
    webpackFinal: async (config, { configType }) => {
        // apply any global webpack configs that might have been specified in .storybook/main.js
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType });
        }

        // for backwards compatibility call the `rootWebpackConfig`
        // this can be removed once that one is migrated fully to
        // use the `webpackFinal` property in the `main.js` file
        config = rootWebpackConfig({ config });

        // add your own webpack tweaks if needed

        // config.output = {
        //     uniqueName: "demo",
        //     publicPath: "auto",
        // };

        // config.resolve = {
        //     // TODO spread
        //     alias: {
        //         ...sharedMappings.getAliases(),
        //     },
        // };

        // config.plugins = [
        //     // TODO spread
        //     new ModuleFederationPlugin({
        //         remotes: {
        //             portfolio: "portfolio@http://localhost:4201/remoteEntry.js",
        //         },
        //         shared: {
        //             "@angular/core": { singleton: true, strictVersion: true },
        //             "@angular/common": { singleton: true, strictVersion: true },
        //             "@angular/common/http": {
        //                 singleton: true,
        //                 strictVersion: true,
        //             },
        //             "@angular/router": { singleton: true, strictVersion: true },
        //             ...sharedMappings.getDescriptors(),
        //         },
        //     }),
        //     sharedMappings.getPlugin(),
        // ];

        return config;
    },
};
