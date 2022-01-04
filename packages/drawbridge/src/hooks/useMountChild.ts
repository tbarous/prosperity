import {useEffect, useRef, useState} from "react";
import {FunctionVoid} from "@typings";
import {emptyFunction} from "../helpers/Helpers";

export interface useMountChildProps {
    render: boolean,
    mount: boolean,
    entryDelay: number,
    exitDelay: number,
    unmountComponent: (override?: boolean) => void,
    renderComponent: FunctionVoid,
    toggle: FunctionVoid,
}

/**
 * Controls the behavior of a child component.
 * Mostly useful to separate the appearance of a
 * child component in the DOM and the actual appearance of it on a
 * page. To achieve this 2 state variables are used, render and mount.
 * The operations that are automatically happening are:
 * [RENDER] -> [MOUNT]
 * [UNMOUNT] -> [UNRENDER]
 */
function useMountChild(
    entryDelay: number = 0,
    exitDelay = 0
): useMountChildProps {
    /**
     * This state variable manages the appearance of the child component
     * on the DOM. This may differ to the way it appears on the page.
     */
    const [render, setRender] = useState<boolean>(false);

    /**
     * This state variable manages the appearance of the child component
     * on the page. It is used mostly to add a delay behavior.
     */
    const [mount, setMount] = useState<boolean>(false);

    /**
     * This state variable manages the appearance of the child component
     * on the page. It is used mostly to add a delay behavior.
     */
    const timeoutRef = useRef<any>(null);
    const timeoutRef2 = useRef<any>(null);

    /**
     * Render a child component.
     */
    const renderComponent = () => {
        if (!render) setRender(true);

        if (render && !mount) setMount(true);
    }

    /**
     * Perform inner unmount on child component.
     */
    const unmountComponent = (override = false) => {
        if (mount || override) setMount(false);
    }

    /**
     * Toggles the appearance of a child component.
     */
    const toggle = () => {}

    useEffect(() => {
        if (!mount) {
            if (!exitDelay) setRender(false);

            timeoutRef.current = setTimeout(() => setRender(false), exitDelay);

            return () => clearTimeout(timeoutRef.current);
        }
    }, [mount]);

    useEffect(() => {
        if (render && !mount) {
            timeoutRef2.current = setTimeout(() => setMount(true), 100);

            return () => clearTimeout(timeoutRef2.current);
        }
    }, [render]);

    return {
        render,
        mount,
        unmountComponent,
        renderComponent,
        toggle,
        entryDelay,
        exitDelay
    };
}

export default useMountChild;