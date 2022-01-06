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
var ThemeUtils_1 = require("../../../utils/ThemeUtils");
var ContainerMaxWidthEnum;
(function (ContainerMaxWidthEnum) {
    ContainerMaxWidthEnum["Medium"] = "750px";
    ContainerMaxWidthEnum["Large"] = "970px";
    ContainerMaxWidthEnum["XLarge"] = "1170px";
})(ContainerMaxWidthEnum || (ContainerMaxWidthEnum = {}));
var ContainerStyled = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  padding-right: ", ";\n  padding-left: ", ";\n  box-sizing: ", ";\n  width: ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  height: ", ";\n  padding-right: ", ";\n  padding-left: ", ";\n  box-sizing: ", ";\n  width: ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function (p) { return p.theme.dimension.d100; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s5); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s5); }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.dimension.d100; }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.md, (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "], ["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "])), !p.fluid ? ContainerMaxWidthEnum.Medium : "", !p.fluid ? p.theme.spacing.auto : "", !p.fluid ? p.theme.spacing.auto : "")); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.lg, (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "], ["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "])), !p.fluid ? ContainerMaxWidthEnum.Large : "", !p.fluid ? p.theme.spacing.auto : "", !p.fluid ? p.theme.spacing.auto : "")); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.xl, (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "], ["\n    max-width: ", ";\n    margin-right: ", ";\n    margin-left: ", ";\n  "])), !p.fluid ? ContainerMaxWidthEnum.XLarge : "", !p.fluid ? p.theme.spacing.auto : "", !p.fluid ? p.theme.spacing.auto : "")); });
exports.default = ContainerStyled;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
