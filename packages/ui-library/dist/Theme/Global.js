var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { createGlobalStyle } from "styled-components";
var defaultGlobalStyle = "\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n";
export function extendGlobalStyle(extra) {
    if (!extra)
        return createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), defaultGlobalStyle);
    return createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), defaultGlobalStyle, extra);
}
export default extendGlobalStyle;
var templateObject_1, templateObject_2;
