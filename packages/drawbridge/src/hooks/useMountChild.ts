import {useEffect, useState} from "react";
import {FunctionVoid} from "@typings";

function useMountChild(
    renderImmediately: boolean = true,
    mountImmediately: boolean = false
): {
    render: boolean,
    mount: boolean,
    mountComponent: FunctionVoid,
    unmountComponent: FunctionVoid,
    onMounted: FunctionVoid,
    onUnmounted: FunctionVoid,
    toggleChildMount: FunctionVoid,
    renderComponent: FunctionVoid,
    unRenderComponent: FunctionVoid
} {
    const [render, setRender] = useState(renderImmediately);
    const [mount, setMount] = useState(mountImmediately);

    const mountComponent = () => setMount(true);
    const unmountComponent = () => setMount(false);

    const renderComponent = () => setRender(true);
    const unRenderComponent = () => setRender(false);

    const onMounted = () => setRender(true);
    const onUnmounted = () => setRender(false);

    const toggleChildMount = () => {
        if (mount) {
            setMount(false);

            return;
        }

        if (!mount) setRender(true);
    }

    useEffect(() => {
        if (render) setMount(true);
    }, [render])

    useEffect(() => {
        if (!mount) setRender(false);
    }, [mount])

    return {
        render,
        mount,
        mountComponent,
        unmountComponent,
        onMounted,
        onUnmounted,
        toggleChildMount,
        renderComponent,
        unRenderComponent
    };
}

export default useMountChild;