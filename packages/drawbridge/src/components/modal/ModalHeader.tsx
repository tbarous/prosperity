import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalHeaderStyled from "./styled/modal-header/ModalHeaderStyled";

const ModalHeader: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <ModalHeaderStyled className={className}>
            {children}
        </ModalHeaderStyled>
    );
}

export default ModalHeader;