import {useEffect, useState} from "react";

function useControlChild() {
    const [unmount, setUnmount] = useState(false);
    const [render, setRender] = useState(true);

    function unMount(){
        setUnmount(true);
    }

    function mount(){
        setRender(true);
    }

    function toggle() {
        if (!render) {
            setRender(true);
        } else {
            setUnmount(!unmount);
        }
    }

    function onUnmounted() {
        setRender(false);
    }

    useEffect(() => {
        if (render) {
            setUnmount(false)
        }
    }, [render]);

    return {toggle, render, unmount, onUnmounted, unMount, mount};
}

export default useControlChild;