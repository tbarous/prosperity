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
var _helpers_1 = require("../../helpers/index");
var RadioStyled_1 = __importDefault(require("../form/styled/RadioStyled"));
var RadioInputStyled_1 = __importDefault(require("../form/styled/RadioInputStyled"));
var RadioCheckmarkStyled_1 = __importDefault(require("../form/styled/RadioCheckmarkStyled"));
var Radio = function (props) {
    var children = props.children, className = props.className, _a = props.onChange, onChange = _a === void 0 ? _helpers_1.emptyFunction : _a;
    var _b = (0, react_1.useState)(false), checked = _b[0], setChecked = _b[1];
    function handleChange() {
        setChecked(!checked);
    }
    return (react_1.default.createElement(RadioStyled_1.default, { className: className },
        react_1.default.createElement(RadioInputStyled_1.default, { type: "radio", onChange: handleChange, checked: checked }),
        react_1.default.createElement(RadioCheckmarkStyled_1.default, { checked: checked })));
};
exports.default = Radio;
