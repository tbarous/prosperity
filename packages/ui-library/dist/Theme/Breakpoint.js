export var breakpointExample = {
    xs: "350px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
};
function up(breakpoint, styles) {
    return "\n        @media screen and (min-width: ".concat(breakpoint, "){\n            ").concat(styles, "\n        }\n    ");
}
function down(breakpoint, styles) {
    return "\n        @media screen and (max-width: ".concat(breakpoint, "){\n            ").concat(styles, "\n        }\n    ");
}
export { up, down };
