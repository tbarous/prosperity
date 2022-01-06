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
var DrawerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  height: ", ";\n  background-color: ", ";\n  width: ", ";\n  position: ", ";\n  transform: ", ";\n  transition: ", ";\n"], ["\n  display: ", ";\n  height: ", ";\n  background-color: ", ";\n  width: ", ";\n  position: ", ";\n  transform: ", ";\n  transition: ", ";\n"])), function (p) { return p.theme.display.flex; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.color.dark; }, function (p) { return p.theme.dimension.d20; }, function (p) { return p.overlay ? p.theme.position.fixed : p.theme.position.relative; }, function (p) { return p.mount ? "translateX(0)" : "translateX(-120%)"; }, function (p) { return p.mount ? "transform ".concat(p.entryDelay / 1000, "s") : "transform ".concat(p.exitDelay / 1000, "s"); });
exports.default = DrawerStyled;
var templateObject_1;
