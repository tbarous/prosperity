import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ModalBodyStyled from "@components/modal/styled/ModalBodyStyled";

interface ModalBodyProps extends BasicComponentProps {}

const ModalBody: FunctionComponent<ModalBodyProps> = (props: ModalBodyProps): ReactElement => {
    const {children, className} = props;

    return (
        <ModalBodyStyled className={className}>
            {children}
        </ModalBodyStyled>
    );
}

export default ModalBody;