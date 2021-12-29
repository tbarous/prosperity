var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n    box-shadow: ", ";\n    font-size: ", ";\n    padding: ", ";\n    width: ", ";\n    font-family: ", ";\n    height: 10%;\n    overflow-y: auto;\n"], ["\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n    box-shadow: ", ";\n    font-size: ", ";\n    padding: ", ";\n    width: ", ";\n    font-family: ", ";\n    height: 10%;\n    overflow-y: auto;\n"])), function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.shadow.primary; }, function (props) { return props.theme.font.size.lg; }, function (props) { return props.theme.spacing.padding.lg; }, function (props) { return props.theme.spacing.width.full; }, function (props) { return props.theme.font.family.secondary; });
var ModalTitle = function (props) {
    var children = props.children;
    return (<Wrapper>
            {children}
        </Wrapper>);
};
export default ModalTitle;
var templateObject_1;
