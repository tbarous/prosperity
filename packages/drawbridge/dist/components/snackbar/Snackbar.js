"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarVariationEnum = void 0;
var react_1 = __importDefault(require("react"));
var _icons_1 = require("../../icons/index");
var useCallbackOnTimeout_1 = __importDefault(require("../../hooks/useCallbackOnTimeout"));
var SnackbarStyled_1 = __importDefault(require("../snackbar/styled/SnackbarStyled"));
var SnackbarCloseStyled_1 = __importDefault(require("../snackbar/styled/SnackbarCloseStyled"));
var SnackbarVariationEnum;
(function (SnackbarVariationEnum) {
    SnackbarVariationEnum["SUCCESS"] = "success";
    SnackbarVariationEnum["WARNING"] = "warning";
    SnackbarVariationEnum["DANGER"] = "danger";
})(SnackbarVariationEnum = exports.SnackbarVariationEnum || (exports.SnackbarVariationEnum = {}));
var Snackbar = function (props) {
    var children = props.children, className = props.className, success = props.success, warning = props.warning, danger = props.danger, dismissible = props.dismissible, closeOnDelay = props.closeOnDelay, unmountComponent = props.unmountComponent, mount = props.mount, entryDelay = props.entryDelay, exitDelay = props.exitDelay;
    if (closeOnDelay)
        (0, useCallbackOnTimeout_1.default)(closeOnDelay, function () { return unmountComponent(true); });
    return (react_1.default.createElement(SnackbarStyled_1.default, { className: className, success: success, warning: warning, danger: danger, mount: mount, entryDelay: entryDelay, exitDelay: exitDelay },
        children,
        dismissible && react_1.default.createElement(SnackbarCloseStyled_1.default, { onClick: unmountComponent, icon: _icons_1.Times })));
};
exports.default = Snackbar;
