import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalHeaderStyled from "./styled/modal-header/ModalHeaderStyled";

/**
 * Modal Header Component.
 * @param props
 * @constructor
 */
const ModalHeader: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <ModalHeaderStyled
            className={className}
        >
            {children}
        </ModalHeaderStyled>
    );
}

export default ModalHeader;