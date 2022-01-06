"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * Controls the behavior of a child component.
 * Mostly useful to separate the appearance of a
 * child component in the DOM and the actual appearance of it on a
 * page. To achieve this 2 state variables are used, render and mount.
 * The operations that are automatically happening are:
 * [RENDER] -> [MOUNT]
 * [UNMOUNT] -> [UNRENDER]
 */
function useMountChild(entryDelay, exitDelay) {
    if (entryDelay === void 0) { entryDelay = 0; }
    if (exitDelay === void 0) { exitDelay = 0; }
    /**
     * This state variable manages the appearance of the child component
     * on the DOM. This may differ to the way it appears on the page.
     */
    var _a = (0, react_1.useState)(false), render = _a[0], setRender = _a[1];
    /**
     * This state variable manages the appearance of the child component
     * on the page. It is used mostly to add a delay behavior.
     */
    var _b = (0, react_1.useState)(false), mount = _b[0], setMount = _b[1];
    /**
     * This state variable manages the appearance of the child component
     * on the page. It is used mostly to add a delay behavior.
     */
    var timeoutRef = (0, react_1.useRef)(null);
    var timeoutRef2 = (0, react_1.useRef)(null);
    /**
     * Render a child component.
     */
    var renderComponent = function () {
        if (!render)
            setRender(true);
        if (render && !mount)
            setMount(true);
    };
    /**
     * Perform inner unmount on child component.
     */
    var unmountComponent = function (override) {
        if (override === void 0) { override = false; }
        if (mount || override)
            setMount(false);
    };
    /**
     * Toggles the appearance of a child component.
     */
    var toggle = function () { };
    (0, react_1.useEffect)(function () {
        if (!mount) {
            if (!exitDelay)
                setRender(false);
            timeoutRef.current = setTimeout(function () { return setRender(false); }, exitDelay);
            return function () { return clearTimeout(timeoutRef.current); };
        }
    }, [mount]);
    (0, react_1.useEffect)(function () {
        if (render && !mount) {
            timeoutRef2.current = setTimeout(function () { return setMount(true); }, 100);
            return function () { return clearTimeout(timeoutRef2.current); };
        }
    }, [render]);
    return {
        render: render,
        mount: mount,
        unmountComponent: unmountComponent,
        renderComponent: renderComponent,
        toggle: toggle,
        entryDelay: entryDelay,
        exitDelay: exitDelay
    };
}
exports.default = useMountChild;
