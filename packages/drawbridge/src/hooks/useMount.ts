import {useEffect, useRef, useState} from "react";
import {useMountChildProps} from "@hooks/useMountChild";

function useUnmount(props: useMountChildProps) {
    const {mount, onUnmounted, exitDelay} = props;

    const [initial, setInitial] = useState(false);

    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        if (!initial) {
            setInitial(true);

            return;
        }

        if (!mount) return;

        if (!exitDelay) onUnmounted();

        timeoutRef.current = setTimeout(onUnmounted, exitDelay);

        return () => clearTimeout(timeoutRef.current);
    }, [mount]);

    return props;
}

export default useUnmount;