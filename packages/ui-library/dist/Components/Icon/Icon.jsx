var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   width: ", ";\n   height: ", ";\n   \n   svg {\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n   width: ", ";\n   height: ", ";\n   \n   svg {\n        width: 100%;\n        height: 100%;\n    }\n"])), function (props) { return "".concat(props.width, "px"); }, function (props) { return "".concat(props.height, "px"); });
var Icon = function (props) {
    var specific = props.specific, width = props.width, height = props.height, onClick = props.onClick, className = props.className;
    return (<Wrapper onClick={onClick} className={className} width={width} height={height} dangerouslySetInnerHTML={{ __html: specific }}>
        </Wrapper>);
};
export default Icon;
var templateObject_1;
