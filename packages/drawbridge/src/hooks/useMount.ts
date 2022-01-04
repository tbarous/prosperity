import {useEffect, useRef, useState} from "react";
import {emptyFunction} from "../helpers/Helpers";
import {useMountChildProps} from "@hooks/useMountChild";

function useUnmount(props: useMountChildProps) {
    const {
        entryDelay,
        exitDelay,
        mount,
        render,
        mountComponent = emptyFunction,
        unmountComponent = emptyFunction,
        renderComponent = emptyFunction,
        unRenderComponent = emptyFunction,
        onRendered = emptyFunction,
        onUnRendered = emptyFunction,
        onMounted = emptyFunction,
        onUnmounted = emptyFunction,
        toggle = emptyFunction,
    } = props;

    const timeoutRef = useRef<any>(null);

    const [initial, setInitial] = useState(false);

    useEffect(() => {
        if (!initial) {
            setInitial(true);

            return;
        }

        if (!mount) {
            if (!exitDelay) onUnmounted();

            timeoutRef.current = setTimeout(onUnmounted, exitDelay);

            return () => clearTimeout(timeoutRef.current);
        }
    }, [mount]);

    return {
        mount,
        render,
        mountComponent,
        unmountComponent,
        renderComponent,
        unRenderComponent,
        onRendered,
        onUnRendered,
        onMounted,
        onUnmounted,
        toggle,
        entryDelay,
        exitDelay
    }
}

export default useUnmount;