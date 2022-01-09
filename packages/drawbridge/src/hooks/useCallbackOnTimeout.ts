import {useEffect, useRef} from "react";

function useCallbackOnTimeout(delay: number, callback: () => void) {
    const timeoutCloseRef = useRef<any>(null);

    useEffect(() => {
        if (!delay) return;

        timeoutCloseRef.current = setTimeout(callback, delay)

        return () => clearTimeout(timeoutCloseRef.current);
    }, []);
}

export default useCallbackOnTimeout;