var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    font-size: ", ";\n    padding: ", " ", ";\n    width: ", ";\n    position: absolute;\n    bottom: 0;\n    height: 20%;\n    overflow-y: auto;\n"], ["\n    box-shadow: ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    font-size: ", ";\n    padding: ", " ", ";\n    width: ", ";\n    position: absolute;\n    bottom: 0;\n    height: 20%;\n    overflow-y: auto;\n"])), function (props) { return props.theme.shadow.primary; }, function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.spacing.padding.sm; }, function (props) { return props.theme.spacing.padding.lg; }, function (props) { return props.theme.spacing.width.full; });
var ModalFooter = function (props) {
    var children = props.children;
    return (<Wrapper>
            {children}
        </Wrapper>);
};
export default ModalFooter;
var templateObject_1;
