import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalFooterStyled from "./styled/modal-footer/ModalFooterStyled";

const ModalFooter: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <ModalFooterStyled className={className}>
            {children}
        </ModalFooterStyled>
    );
}

export default ModalFooter;