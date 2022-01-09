import {useEffect, useRef, useState} from "react";

function useTransition(duration: number, onStopDisplay: () => void, onStartDisplay?: () => void) {
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, [])

    const ref = useRef<any>(null);

    function remove() {
        setTransition(false);
    }

    function insert() {
        setTransition(true);
    }

    function toggle() {
        setTransition(!transition);
    }

    useEffect(() => {
        if (!transition) {
            ref.current = setTimeout(() => {
                onStopDisplay && onStopDisplay();
            }, duration)

            return () => clearTimeout(ref.current);
        } else {
            onStartDisplay && onStartDisplay();
        }
    }, [transition])

    return {
        remove,
        transition,
        toggle
    }
}

export default useTransition;