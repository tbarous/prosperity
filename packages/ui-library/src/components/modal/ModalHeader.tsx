import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalHeaderWrapper from "@components/modal/styled/ModalHeaderWrapper";

const ModalHeader: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <ModalHeaderWrapper className={className}>
            {children}
        </ModalHeaderWrapper>
    );
}

export default ModalHeader;