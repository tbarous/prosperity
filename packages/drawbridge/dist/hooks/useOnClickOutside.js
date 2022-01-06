"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useOnClickOutside(ref, callback) {
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            if (!callback || !ref.current || ref.current.contains(event.target))
                return;
            callback();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, []);
}
exports.default = useOnClickOutside;
