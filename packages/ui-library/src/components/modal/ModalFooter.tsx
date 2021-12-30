import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalFooterWrapper from "@components/modal/styled/ModalFooterWrapper";

const ModalFooter: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <ModalFooterWrapper className={className}>
            {children}
        </ModalFooterWrapper>
    );
}

export default ModalFooter;