import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalBodyStyled from "@components/modal/styled/ModalBodyStyled";

/**
 * Modal Body Component.
 * @param props
 * @constructor
 */
const ModalBody: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <ModalBodyStyled className={className}>
            {children}
        </ModalBodyStyled>
    );
}

export default ModalBody;