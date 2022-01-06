"use strict";
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
var react_1 = __importStar(require("react"));
var RowStyled_1 = __importDefault(require("../grid/styled/RowStyled"));
var Row = function (props) {
    var children = props.children, gutter = props.gutter, className = props.className;
    var childrenWithProps = react_1.default.Children.map(children, function (child) {
        if (!(0, react_1.isValidElement)(child) || !gutter)
            return child;
        return (0, react_1.cloneElement)(child, { gutter: gutter % 2 === 0 ? gutter : gutter + 1 });
    });
    return (react_1.default.createElement(RowStyled_1.default, { className: className, gutter: gutter }, childrenWithProps));
};
exports.default = Row;
