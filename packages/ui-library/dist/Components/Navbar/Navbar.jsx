var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    // position: fixed;\n    // top: 0;\n    // left: 0;\n    width: 100%;\n    height: 60px;\n    z-index: 11;\n    background: white;\n    display: flex;\n    align-items: center;\n"], ["\n    // position: fixed;\n    // top: 0;\n    // left: 0;\n    width: 100%;\n    height: 60px;\n    z-index: 11;\n    background: white;\n    display: flex;\n    align-items: center;\n"])));
var Navbar = function (props) {
    var children = props.children, className = props.className;
    return (<Wrapper className={className}>
            {children}
        </Wrapper>);
};
export default Navbar;
var templateObject_1;
