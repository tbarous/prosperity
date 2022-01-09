import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ModalHeaderStyled from "@components/modal/styled/ModalHeaderStyled";

interface ModalFooterProps extends BasicComponentProps {}

const ModalHeader: FunctionComponent<ModalFooterProps> = (props: ModalFooterProps): ReactElement => {
    const {children, className} = props;

    return (
        <ModalHeaderStyled className={className}>
            {children}
        </ModalHeaderStyled>
    );
}

export default ModalHeader;