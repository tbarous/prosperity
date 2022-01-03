import {useEffect, useRef} from "react";

export interface useMountProps {
    delay?: number,
    mount?: boolean,
    mountComponent?: () => void,
    unmountComponent?: () => void,
    onMounted?: () => void,
    onUnmounted?: () => void,
}

function useUnmount(props: useMountProps) {
    const {
        delay = 0,
        mount,
        mountComponent = () => {},
        unmountComponent = () => {},
        onMounted = () => {},
        onUnmounted = () => {},
    } = props;

    const timeoutRef = useRef<any>(null);

    function handle(callback: () => void) {
        if (!delay) callback();

        timeoutRef.current = setTimeout(callback, delay);

        return () => clearTimeout(timeoutRef.current);
    }

    useEffect(() => mountComponent(), []);

    useEffect(() => handle(mount ? onMounted : onUnmounted), [mount]);
}

export default useUnmount;