import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { useMountChildProps } from "../../hooks/useMountChild";
interface Props extends BasicComponentProps, useMountChildProps {
    closeOnClickOutside?: boolean;
    dismissible?: boolean;
}
declare const Modal: React.FunctionComponent<Props>;
export default Modal;
