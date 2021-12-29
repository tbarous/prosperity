import { useEffect } from "react";
function useOnClickOutside(ref, callback) {
    useEffect(function () {
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
export default useOnClickOutside;
