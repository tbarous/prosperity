import React, {useEffect, useLayoutEffect, useState} from "react";

/**
 * Handle the appearance of a React Node in the DOM.
 * Mostly useful for a HOC parent to manage the appearance
 * of a child Node in the DOM.
 */
function useOnClickOutside(ref: any, callback?: () => void): void {
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