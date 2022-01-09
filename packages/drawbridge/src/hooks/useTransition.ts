import {useEffect, useRef, useState} from "react";

function useTransition(duration: number, onStopDisplay: () => void) {
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, [])

    const ref = useRef<any>(null);

    function remove() {
        setTransition(false);
    }

    useEffect(() => {
        if (!transition) {
            ref.current = setTimeout(() => {
                onStopDisplay && onStopDisplay();
            }, duration)

            return () => clearTimeout(ref.current);
        }
    }, [transition])

    return {
        remove,
        transition
    }
}

export default useTransition;