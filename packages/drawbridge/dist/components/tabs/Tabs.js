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
var TabsStyled_1 = __importDefault(require("../tabs/styled/TabsStyled"));
var TabActiveStyled_1 = __importDefault(require("../tabs/styled/TabActiveStyled"));
var Tabs = function (props) {
    var children = props.children, className = props.className, activate = props.activate, _a = props.speed, speed = _a === void 0 ? 1 : _a, _b = props.onChange, onChange = _b === void 0 ? function () {
    } : _b;
    var _c = (0, react_1.useState)(0), active = _c[0], setActive = _c[1];
    (0, react_1.useEffect)(function () {
        if (typeof activate === "number") {
            setActive(activate);
        }
    }, [activate]);
    function onClickTab(index) {
        setActive(index);
        onChange(index);
    }
    var width = 100 / react_1.Children.count(children);
    return (react_1.default.createElement(TabsStyled_1.default, { className: className },
        react_1.Children.map(children, function (child, index) {
            return react_1.default.isValidElement(child) && react_1.default.cloneElement(child, { onClickTab: function () { return onClickTab(index); } });
        }),
        react_1.default.createElement(TabActiveStyled_1.default, { width: width, left: active * 100, speed: speed })));
};
exports.default = Tabs;
