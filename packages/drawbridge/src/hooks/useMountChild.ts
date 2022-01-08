import {useEffect, useRef, useState} from "react";

interface T {
    render: boolean,
    mount: boolean,
    unmountComponent: (force?: boolean) => void,
    renderComponent: () => void,
    toggle: () => void,
}

function useMountChild(delay = 0): T {
    const [render, setRender] = useState<boolean>(false);
    const [mount, setMount] = useState<boolean>(false);
    const timeoutRef = useRef<any>(null);

    function renderComponent() {
        if (!render) {
            setRender(true);
        } else {
            if (!mount) {
                setMount(true);
            }
        }
    }

    function unmountComponent(force?: boolean) {
        if (force || mount) {
            setMount(false);
        }
    }

    function toggle() {
        if (!render) {
            renderComponent();
        }

        if (mount) {
            unmountComponent();
        }
    }

    useEffect(() => {
        if (mount) return;

        if (!delay) {
            setRender(false);

            return;
        }

        timeoutRef.current = setTimeout(() => setRender(false), delay);

        return () => clearTimeout(timeoutRef.current);
    }, [mount]);

    useEffect(() => {
        if (render && !mount) {
            setMount(true);
        }
    }, [render]);

    return {
        render,
        mount,
        unmountComponent,
        renderComponent,
        toggle
    };
}

export default useMountChild;