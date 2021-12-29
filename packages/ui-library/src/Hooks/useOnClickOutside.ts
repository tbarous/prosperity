import React, {useEffect, useLayoutEffect, useState} from "react";

function useOnClickOutside(ref: any, callback?: () => void) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!callback || !ref.current || ref.current.contains(event.target)) return;

            callback();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [])
}

export default useOnClickOutside;