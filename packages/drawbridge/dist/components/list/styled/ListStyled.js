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
var ListStyled = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  box-shadow: ", ";\n"], ["\n  margin: 0;\n  box-shadow: ", ";\n"])), function (p) { return p.theme.shadow.medium; });
exports.default = ListStyled;
var templateObject_1;
