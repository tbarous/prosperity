import React, {useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ModalOverlay from "@atoms/ModalOverlay";
import ModalWrapper from "@atoms/ModalWrapper";
import ModalContent from "@atoms/ModalContent";
import ModalClose from "@atoms/ModalClose";
import {Times} from "@icons";

export interface ModalProps extends BasicComponentProps {}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps): ReactElementOrNull => {
    const {children, className} = props;

    const ref = useRef(null);

    return (
        <>
            <ModalOverlay className={className}/>

            <ModalWrapper>
                <ModalContent ref={ref}>
                    <ModalClose icon={Times}/>

                    {children}
                </ModalContent>
            </ModalWrapper>
        </>
    );
}

export default Modal;