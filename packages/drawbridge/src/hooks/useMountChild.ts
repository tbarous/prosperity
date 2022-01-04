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
     * Upon rendering a child component, it must be mounted after.
     * onRendered mounts the child component after the rendering happens.
     */
    useEffect(() => {
        if (!render) return;

        onRendered();
    }, [render])

    /**
     * Perform inner mount on the child component.
     */
    const mountComponent = () => setMount(true);

    /**
     * Perform inner unmount on child component.
     */
    const unmountComponent = () => setMount(false);

    /**
     * Render a child component.
     */
    const renderComponent = () => setRender(true);

    /**
     * Un-render a child component.
     */
    const unRenderComponent = () => setRender(false);

    /**
     * After a child component has been rendered, it must be mounted.
     */
    const onRendered = () => setMount(true);

    /**
     * After a child component has been un-rendered no action
     * has to happen yet as the assumption is this un-rendered action
     * was triggered by an unMount.
     */
    const onUnRendered = emptyFunction;

    /**
     * After a child component has been mounted no action
     * has to happen yet.
     */
    const onMounted = emptyFunction;

    /**
     * After a child component has been unmounted, it must be
     * un-rendered.
     */
    const onUnmounted = () => setRender(false);

    /**
     * Toggles the appearance of a child component.
     */
    const toggle = () => {
        if (!render) {
            renderComponent();

            return;
        }

        if (render) {
            if (mount) {
                unmountComponent()
            } else {
                mountComponent();
            }
        }
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