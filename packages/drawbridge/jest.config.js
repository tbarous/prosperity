module.exports = {
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect"
    ],
    testEnvironment: "jsdom",
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@theme(.*)$": "<rootDir>/src/theme$1"
    }
};