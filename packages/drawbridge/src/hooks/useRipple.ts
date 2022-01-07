import {useEffect, useRef, useState} from "react";

function useRipple(){
    const [ripple, setRipple] = useState(false);
    const [clicked, setClicked] = useState(false);

    function onClick() {
        setClicked(true)
    }

    const ref = useRef<any>(null);

    useEffect(() => {
        ref.current = setTimeout(() => setClicked(false), 400);

        return () => clearTimeout(ref.current);
    }, [clicked]);

    return {
        startRipple: () => setRipple(true),
        stopRipple: () => setRipple(false),
        startClickRipple: () => setClicked(true),
        ripple,
        clicked
    }
}

export default useRipple;