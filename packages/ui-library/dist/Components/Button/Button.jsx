var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    border: none;\n    color: white;\n    padding: ", ";\n    border-radius: ", ";\n    background: ", ";\n    font-family: ", ";\n    \n    &:hover {\n        box-shadow: ", ";\n    }\n"], ["\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    border: none;\n    color: white;\n    padding: ", ";\n    border-radius: ", ";\n    background: ", ";\n    font-family: ", ";\n    \n    &:hover {\n        box-shadow: ", ";\n    }\n"])), function (props) { return props.theme.spacing.padding.md; }, function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.color.primary; }, function (props) { return props.theme.font.family.primary; }, function (props) { return props.theme.shadow.primary; });
var Button = function (props) {
    var children = props.children, onClick = props.onClick;
    return (<Wrapper onClick={onClick}>
            {children}
        </Wrapper>);
};
export default Button;
var templateObject_1;
