import {useEffect, useRef, useState} from "react";

function useRipple() {
    const [ripple, setRipple] = useState(false);
    const [clicked, setClicked] = useState(false);

    function onClick() {
        setClicked(true)
    }

    const ref = useRef<any>(null);

    function startRipple() {
        setRipple(true);
    }

    function stopRipple() {
        setRipple(false);
    }

    function startClickRipple() {
        setClicked(true);
    }

    useEffect(() => {
        ref.current = setTimeout(() => setClicked(false), 400);

        return () => clearTimeout(ref.current);
    }, [clicked]);

    return {startRipple, stopRipple, startClickRipple, ripple, clicked}
}

export default useRipple;