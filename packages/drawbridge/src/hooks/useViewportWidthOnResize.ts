import {useEffect, useState} from "react";
import useViewportDimensions from "@hooks/useViewportDimensions";

function useViewportWidthOnResize() {
    const [width, setWidth] = useState(useViewportDimensions().x);

    useEffect(() => {
        const listener = () => {
            const {x, y} = useViewportDimensions();

            setWidth(x);
        }

        window.addEventListener('resize', listener);

        return () => window.removeEventListener("resize", listener);
    })

    return {width};
}

export default useViewportWidthOnResize;