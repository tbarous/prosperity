var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: blue;\n    width: 30%;\n    height: 100%;\n"], ["\n    background: blue;\n    width: 30%;\n    height: 100%;\n"])));
var links = [
    { name: 'About', href: '/about' }
];
var Sidebar = function () {
    return (<Wrapper>
            {/*<div>qadsd</div>*/}

            {/*{links.map((link: ILink, index: number) => <Link key={index} href={link.href}>{link.name}</Link>)}*/}
        </Wrapper>);
};
export default Sidebar;
var templateObject_1;
