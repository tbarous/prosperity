import {useEffect, useState} from "react";
import {FunctionVoid} from "@typings";
import {emptyFunction} from "../helpers/Helpers";

export interface useMountChildProps {
    render: boolean,
    mount: boolean,
    entryDelay: number,
    exitDelay: number,
    mountComponent: FunctionVoid,
    unmountComponent: FunctionVoid,
    renderComponent: FunctionVoid,
    unRenderComponent: FunctionVoid,
    onRendered: FunctionVoid,
    onUnRendered: FunctionVoid,
    onUnmounted: FunctionVoid,
    onMounted: FunctionVoid,
    toggle: FunctionVoid,
}

function useMountChild(entryDelay: number = 0, exitDelay = 0): useMountChildProps {
    const [render, setRender] = useState<boolean>(false);
    const [mount, setMount] = useState<boolean>(false);

    const mountComponent = () => setMount(true);
    const unmountComponent = () => setMount(false);

    const renderComponent = () => setRender(true);
    const unRenderComponent = () => setRender(false);

    const onRendered = () => setMount(true);
    const onUnRendered = emptyFunction;

    const onMounted = emptyFunction;
    const onUnmounted = () => setRender(false);

    useEffect(() => {
        if (render) onRendered();
    }, [render])

    const toggle = () => {
        if (mount) {
            unmountComponent();
            return;
        }

        if (!render) renderComponent();
    }

    return {
        render,
        mount,
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
    };
}

export default useMountChild;