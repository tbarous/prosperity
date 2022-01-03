import {useEffect, useRef} from "react";

function useDelayedUnmounting(
    unmounting = false,
    onEndUnmount: any
) {
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        if (unmounting) timeoutRef.current = setTimeout(onEndUnmount, 800);

        return () => clearTimeout(timeoutRef.current);
    }, [unmounting]);
}

export default useDelayedUnmounting;