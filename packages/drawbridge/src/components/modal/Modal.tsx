import React, {ReactElement, useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@icons";
import ModalCloseStyled from "@components/modal/styled/ModalCloseStyled";
import ModalOverlayStyled from "@components/modal/styled/ModalOverlayStyled";
import ModalContentStyled from "@components/modal/styled/ModalContentStyled";
import ModalWrapperStyled from "@components/modal/styled/ModalWrapperStyled";

export interface ModalProps extends BasicComponentProps {
    closeOnClickOutside?: boolean,
    dismissible?: boolean
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps): ReactElementOrNull => {
    const {children, className, closeOnClickOutside, dismissible,} = props;

    const ref = useRef(null);

    if (closeOnClickOutside) useOnClickOutside(ref, () => {});

    return (
        <>
            <ModalOverlayStyled className={className}/>

            <ModalWrapperStyled>
                <ModalContentStyled ref={ref}>
                    {dismissible && <ModalCloseStyled onClick={() => {}} icon={Times}/>}

                    {children}
                </ModalContentStyled>
            </ModalWrapperStyled>
        </>
    );
}

export default Modal;