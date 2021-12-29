const path = require("path");

module.exports = {
    typescript: { reactDocgen: false },
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
    },
    webpackFinal: async (config, {configType}) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, "../src/Components"),
            '@/customTypes': path.resolve(__dirname, "../src/Types"),
            '@/theme': path.resolve(__dirname, "../src/Theme"),
            '@/hooks': path.resolve(__dirname, "../src/Hooks"),
        };

        return config;
    }
}