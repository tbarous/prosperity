"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Icon_1 = __importDefault(require("../../icon/Icon"));
var ThemeUtils_1 = require("../../../utils/ThemeUtils");
var ButtonIconStyled = (0, styled_components_1.default)(Icon_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: ", ";\n"], ["\n  color: ", ";\n  margin-right: ", ";\n"])), function (p) { return p.secondary ? p.theme.color.dark : p.theme.color.white; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s4); });
exports.default = ButtonIconStyled;
var templateObject_1;
