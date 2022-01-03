import {useEffect, useRef} from "react";
import {FunctionVoid} from "@typings";

function useUnmountOnTimeout(delay: number, callback: FunctionVoid) {
    const timeoutCloseRef = useRef<any>(null);

    useEffect(() => {
        if (!delay) return;

        timeoutCloseRef.current = setTimeout(callback, delay)

        return () => clearTimeout(timeoutCloseRef.current);
    }, []);
}

export default useUnmountOnTimeout;