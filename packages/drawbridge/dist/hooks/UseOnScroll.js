"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Handle the appearance of a React Node in the DOM.
 * Mostly useful for a HOC parent to manage the appearance
 * of a child Node in the DOM.
 */
function useOnScroll() {
    var _a = (0, react_1.useState)(0), scrolled = _a[0], setScrolled = _a[1];
    var listener = function (event) { return setScrolled(window.scrollY); };
    (0, react_1.useEffect)(function () {
        setScrolled(window.scrollY);
        window.addEventListener("scroll", listener);
        return function () { return window.removeEventListener("scroll", listener); };
    }, []);
    return scrolled;
}
exports.default = useOnScroll;
