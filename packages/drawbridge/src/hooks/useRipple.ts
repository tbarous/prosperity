import {useEffect, useRef, useState} from "react";

function useRipple() {
    const [ripple, setRipple] = useState(false);
    const [clicked, setClicked] = useState(false);

    const ref = useRef<any>(null);

    useEffect(() => {
        ref.current = setTimeout(() => setClicked(false), 400);

        return () => clearTimeout(ref.current);
    }, [clicked]);

    function onClick() {
        setClicked(true)
    }

    function startRipple() {
        setRipple(true);
    }

    function stopRipple() {
        setRipple(false);
    }

    function startClickRipple() {
        setClicked(true);
    }

    return {startRipple, stopRipple, startClickRipple, ripple, clicked}
}

export default useRipple;