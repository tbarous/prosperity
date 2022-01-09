import {useEffect, useRef, useState} from "react";

function useUnmount(unmount: boolean, onUnmounted: () => void, delay?: number) {
    const ref = useRef<any>(null);
    const [myUnmount, setMyUnmount] = useState(true);

    useEffect(() => {
        if (unmount) {
            startUnmount();
        } else {
            setMyUnmount(false);
        }
    }, [unmount])

    useEffect(() => {
        if (myUnmount) {
            ref.current = setTimeout(() => onUnmounted && onUnmounted(), delay);
        }

        return () => clearTimeout(ref.current);
    }, [myUnmount])

    function startUnmount() {
        setMyUnmount(true);
    }

    return {
        startUnmount,
        myUnmount
    };
}

export default useUnmount;