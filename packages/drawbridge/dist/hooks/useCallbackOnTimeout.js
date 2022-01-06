"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useCallbackOnTimeout(delay, callback) {
    var timeoutCloseRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!delay)
            return;
        timeoutCloseRef.current = setTimeout(callback, delay);
        return function () { return clearTimeout(timeoutCloseRef.current); };
    }, []);
}
exports.default = useCallbackOnTimeout;
