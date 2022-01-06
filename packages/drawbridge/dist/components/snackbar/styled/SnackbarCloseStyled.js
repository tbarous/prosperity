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
var SnackbarCloseStyled = (0, styled_components_1.default)(Icon_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  cursor: ", ";\n  right: ", ";\n  top: ", ";\n"], ["\n  position: ", ";\n  cursor: ", ";\n  right: ", ";\n  top: ", ";\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.cursor.pointer; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s5); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s5); });
exports.default = SnackbarCloseStyled;
var templateObject_1;
