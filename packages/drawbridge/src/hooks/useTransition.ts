import {useEffect, useRef, useState} from "react";

function useTransition(duration: number, onStopDisplay: () => void, onStartDisplay?: () => void) {
    const [transition, setTransition] = useState(false);

    const [initial, setInitial] = useState(false)

    const ref = useRef<any>(null);

    useEffect(() => {
        setTransition(true);
    }, [])

    useEffect(() => {
        if (!transition) {
            if (!initial) return;

            ref.current = setTimeout(() => {
                onStopDisplay && onStopDisplay();
            }, duration)

            return () => clearTimeout(ref.current);
        }
    }, [transition])

    function remove() {
        setTransition(false);
    }

    function insert() {
        onStartDisplay && onStartDisplay();

        setTransition(true);
    }

    function toggle() {
        if (transition) {
            remove();
        } else {
            insert();
        }
    }

    return {remove, transition, toggle, insert}
}

export interface useTransitionProps {
    display?: boolean,
    onStartDisplay: () => void,
    onStopDisplay: () => void,
}

export default useTransition;