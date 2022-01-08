import {cloneElement, isValidElement} from "react";

function clone(child: any, props: any) {
    return isValidElement(child) && cloneElement(child, props);
}

export {
    clone
}