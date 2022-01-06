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
var LinkLineStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: ", ";\n  transition: all .3s;\n  position: absolute;\n  //border-radius: 8px;\n  //height: 100%;\n  height: 3px;\n  width: 100%;\n  //pointer-events: none;\n\n  // border: 2px solid ", ";\n    background: ", ";\n  display: block;\n  bottom: -6px;\n"], ["\n  transform: ", ";\n  transition: all .3s;\n  position: absolute;\n  //border-radius: 8px;\n  //height: 100%;\n  height: 3px;\n  width: 100%;\n  //pointer-events: none;\n\n  // border: 2px solid ", ";\n    background: ", ";\n  display: block;\n  bottom: -6px;\n"])), function (p) { return p.active ? "scale(1)" : p.hovered ? "scale(1)" : "scale(0)"; }, function (p) { return p.theme.color.primary; }, function (p) { return p.active ? p.theme.color.primary : p.theme.color.dark; });
exports.default = LinkLineStyled;
var templateObject_1;
