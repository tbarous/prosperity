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
var ModalContentStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  width: ", ";\n  height: ", ";\n  transform: ", ";\n  transition: ", ";\n\n  ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  width: ", ";\n  height: ", ";\n  transform: ", ";\n  transition: ", ";\n\n  ", ";\n"])), function (p) { return p.theme.color.white; }, function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.shadow.medium; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d80; }, function (p) { return p.mount ? "translateY(0)" : "translateY(-130%)"; }, function (p) { return p.mount ? "transform ".concat(p.entryDelay / 1000, "s") : "transform ".concat(p.exitDelay / 1000, "s"); }, function (p) { return MediaUtils_1.default.up(p.theme.breakpoint.md, (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 500px;\n  "], ["\n    width: 500px;\n  "])))); });
exports.default = ModalContentStyled;
var templateObject_1, templateObject_2;
