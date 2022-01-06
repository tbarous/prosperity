"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var MediaUtils_1 = __importDefault(require("../../../utils/MediaUtils"));
var width = function (columns) { return columns ? "".concat((100 / 12) * columns, "%") : ""; };
var ColStyled = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex-grow: ", ";\n  position: ", ";\n  display: ", ";\n  box-sizing: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  height: ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  flex-grow: ", ";\n  position: ", ";\n  display: ", ";\n  box-sizing: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  height: ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function (p) { return p.theme.flexGrow.fg1; }, function (p) { return p.theme.position.relative; }, function (p) { return p.theme.display.block; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.gutter ? "".concat(p.gutter / 2, "px") : ""; }, function (p) { return p.gutter ? "".concat(p.gutter / 2, "px") : ""; }, function (p) { return p.theme.dimension.d100; }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.xs, (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    max-width: ", ";\n  "], ["\n    width: ", ";\n    max-width: ", ";\n  "])), width(p.xs), width(p.xs))); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.sm, (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", ";\n    max-width: ", ";\n  "], ["\n    width: ", ";\n    max-width: ", ";\n  "])), width(p.sm), width(p.sm))); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.md, (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: ", ";\n    max-width: ", ";\n  "], ["\n    width: ", ";\n    max-width: ", ";\n  "])), width(p.md), width(p.md))); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.lg, (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: ", ";\n    max-width: ", ";\n  "], ["\n    width: ", ";\n    max-width: ", ";\n  "])), width(p.lg), width(p.lg))); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.xl, (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: ", ";\n    max-width: ", ";\n  "], ["\n    width: ", ";\n    max-width: ", ";\n  "])), width(p.xl), width(p.xl))); });
exports.default = ColStyled;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
