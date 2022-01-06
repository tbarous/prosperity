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
var CheckboxInputStyled = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  height: ", ";\n  width: ", ";\n"], ["\n  position: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  height: ", ";\n  width: ", ";\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.cursor.pointer; }, function (p) { return p.theme.opacity.hidden; }, function (p) { return p.theme.dimension.d0; }, function (p) { return p.theme.dimension.d0; });
exports.default = CheckboxInputStyled;
var templateObject_1;
