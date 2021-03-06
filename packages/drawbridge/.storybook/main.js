const path = require("path");
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");

module.exports = {
    typescript: {reactDocgen: false},
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        '@react-theming/storybook-addon'
    ],
    "framework": "@storybook/react",
    core: {
        builder: "webpack5",
    },
    staticDirs: ['./assets'],
    webpackFinal: async (config, {configType}) => {
        config.resolve.plugins = config.resolve.plugins || [];
        config.resolve.plugins.push(
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, "../tsconfig.json"),
            })
        );

        return config;
    },
}