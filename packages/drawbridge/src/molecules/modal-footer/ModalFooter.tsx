import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ModalFooterStyled from "@components/modal/styled/ModalFooterStyled";

interface ModalFooterProps extends BasicComponentProps {}

const ModalFooter: FunctionComponent<ModalFooterProps> = (props: ModalFooterProps): ReactElement => {
    const {children, className} = props;

    return (
        <ModalFooterStyled className={className}>
            {children}
        </ModalFooterStyled>
    );
}

export default ModalFooter;