const path = require("path");

module.exports = {
    typescript: { reactDocgen: false },
    webpackFinal: async (config, {configType}) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, "../src/components"),
            '@/customTypes': path.resolve(__dirname, "../src/typings"),
            '@/theme': path.resolve(__dirname, "../src/theme"),
            '@/hooks': path.resolve(__dirname, "../src/hooks"),
        };

        return config;
    },
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    "framework": "@storybook/react",
    core: {
        builder: "webpack5",
    }
}