import {useEffect, useState} from "react";

function useMountChild(): [boolean, boolean, () => void, () => void, () => void, () => void, () => void] {
    const [render, setRender] = useState(true);
    const [mount, setMount] = useState(false);

    const mountComponent = () => setMount(true);
    const unmountComponent = () => setMount(false);

    const onMounted = () => setRender(true);
    const onUnmounted = () => setRender(false);

    useEffect(() => setMount(true), [])

    const toggleChildMount = () => setMount(!mount);

    return [
        render,
        mount,
        mountComponent,
        unmountComponent,
        onMounted,
        onUnmounted,
        toggleChildMount
    ];
}

export default useMountChild;