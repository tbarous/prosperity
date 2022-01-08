import {useEffect, useRef} from "react";

function usePrevious(value: any){
    const ref = useRef();

    useEffect(()=>{
        if(value===0)return
        ref.current = value;
    }, [value])

    return ref.current;
}

export default usePrevious;