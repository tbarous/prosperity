import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalFooterStyled from "@components/modal/styled/ModalFooterStyled";

/**
 * Modal Footer Component.
 * @param props
 * @constructor
 */
const ModalFooter: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <ModalFooterStyled
            className={className}
        >
            {children}
        </ModalFooterStyled>
    );
}

export default ModalFooter;