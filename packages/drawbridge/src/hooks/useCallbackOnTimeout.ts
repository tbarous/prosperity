import {useEffect, useRef} from "react";
import {FunctionVoid} from "@typings";

/**
 * Handle the appearance of a React Node in the DOM.
 * Mostly useful for a HOC parent to manage the appearance
 * of a child Node in the DOM.
 */
function useCallbackOnTimeout(delay: number, callback: FunctionVoid) {
    const timeoutCloseRef = useRef<any>(null);

    useEffect(() => {
        if (!delay) return;

        timeoutCloseRef.current = setTimeout(callback, delay)

        return () => clearTimeout(timeoutCloseRef.current);
    }, []);
}

export default useCallbackOnTimeout;