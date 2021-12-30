import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalBodyWrapper from "@components/modal/styled/ModalBodyWrapper";

const ModalBody: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <ModalBodyWrapper className={className}>
            {children}
        </ModalBodyWrapper>
    );
}

export default ModalBody;