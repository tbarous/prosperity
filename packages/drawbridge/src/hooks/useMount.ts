import {useEffect, useRef, useState} from "react";
import {useMountChildProps} from "@hooks/useMountChild";

/**
 * Handle the appearance of a React Node in the DOM.
 * Mostly useful for a HOC parent to manage the appearance
 * of a child Node in the DOM.
 */
function useUnmount(props: useMountChildProps) {
    /**
     * Handle the appearance of a React Node in the DOM.
     * Mostly useful for a HOC parent to manage the appearance
     * of a child Node in the DOM.
     */
    const {mount, onUnmounted, exitDelay} = props;

    /**
     * Handle the appearance of a React Node in the DOM.
     * Mostly useful for a HOC parent to manage the appearance
     * of a child Node in the DOM.
     */
    const [initial, setInitial] = useState(false);

    /**
     * Handle the appearance of a React Node in the DOM.
     * Mostly useful for a HOC parent to manage the appearance
     * of a child Node in the DOM.
     */
    const timeoutRef = useRef<any>(null);

    /**
     * Handle the appearance of a React Node in the DOM.
     * Mostly useful for a HOC parent to manage the appearance
     * of a child Node in the DOM.
     */
    useEffect(() => {
        if (!initial) {
            setInitial(true);

            return;
        }

        if (mount) return;

        if (!exitDelay) onUnmounted();

        timeoutRef.current = setTimeout(onUnmounted, exitDelay);

        return () => clearTimeout(timeoutRef.current);
    }, [mount]);

    return props;
}

export default useUnmount;