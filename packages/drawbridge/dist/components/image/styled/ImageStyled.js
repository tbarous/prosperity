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
var ImageStyled = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  object-fit: ", ";\n  width: ", ";\n  height: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n"], ["\n  object-fit: ", ";\n  width: ", ";\n  height: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n"])), function (p) { return p.theme.objectFit.cover; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.roundedTop || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none; }, function (p) { return p.roundedTop || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none; }, function (p) { return p.roundedBottom || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none; }, function (p) { return p.roundedBottom || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none; });
exports.default = ImageStyled;
var templateObject_1;
