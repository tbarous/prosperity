"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _helpers_1 = require("../../helpers/index");
var CheckboxInputStyled_1 = __importDefault(require("../form/styled/CheckboxInputStyled"));
var CheckboxStyled_1 = __importDefault(require("../form/styled/CheckboxStyled"));
var _icons_1 = require("../../icons/index");
var Icon_1 = __importDefault(require("../icon/Icon"));
var Text_1 = __importDefault(require("../text/Text"));
var styled_components_1 = __importDefault(require("styled-components"));
var TextStyled = (0, styled_components_1.default)(Text_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: .5rem;\n"], ["\n  margin-left: .5rem;\n"])));
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var IconWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 4px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  position: relative;\n"], ["\n  border-radius: 4px;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  position: relative;\n"])), function (p) { return p.theme.color.secondary; });
var IconStyled = (0, styled_components_1.default)(Icon_1.default)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\nposition: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    bottom: 6px;\n"], ["\n\nposition: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    bottom: 6px;\n"])));
var Checkbox = function (props) {
    var children = props.children, className = props.className, _a = props.onChange, onChange = _a === void 0 ? _helpers_1.emptyFunction : _a, checked = props.checked, label = props.label;
    return (react_1.default.createElement(CheckboxStyled_1.default, { className: className },
        react_1.default.createElement(CheckboxInputStyled_1.default, { type: "checkbox", onChange: onChange, checked: checked }),
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(IconWrapper, { checked: checked }, checked && react_1.default.createElement(IconStyled, { icon: _icons_1.Checkmark, width: 12, height: 12 })),
            label && react_1.default.createElement(TextStyled, null, label))));
};
exports.default = Checkbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
