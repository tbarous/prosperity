var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    padding: ", ";\n    width: ", ";\n    overflow-y: auto;\n    height: 70%;\n"], ["\n    font-size: ", ";\n    padding: ", ";\n    width: ", ";\n    overflow-y: auto;\n    height: 70%;\n"])), function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.spacing.padding.lg; }, function (props) { return props.theme.spacing.width.full; });
var ModalContent = function (props) {
    var children = props.children;
    return (<Wrapper>
            {children}
        </Wrapper>);
};
export default ModalContent;
var templateObject_1;
