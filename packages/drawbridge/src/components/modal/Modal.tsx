import React, {ReactElement, useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@icons";
import ModalCloseStyled from "@components/modal/styled/ModalCloseStyled";
import ModalOverlayStyled from "@components/modal/styled/ModalOverlayStyled";
import ModalContentStyled from "@components/modal/styled/ModalContentStyled";
import ModalWrapperStyled from "@components/modal/styled/ModalWrapperStyled";
import useTransition from "@hooks/useTransition";
import {useTheme} from "styled-components";

export interface ModalProps extends BasicComponentProps {
    closeOnClickOutside?: boolean,
    dismissible?: boolean,
    display?: boolean,
    onStartDisplay?: () => void,
    onStopDisplay: () => void
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps): ReactElementOrNull => {
    const {children, className, closeOnClickOutside, dismissible, display, onStartDisplay, onStopDisplay} = props;

    const ref = useRef(null);

    const {transition, remove} = useTransition(useTheme().animation.modal, onStopDisplay, onStartDisplay);

    if (closeOnClickOutside) {
        useOnClickOutside(ref, remove);
    }

    if(!display) return null;

    return (
        <>
            <ModalOverlayStyled className={className}/>

            <ModalWrapperStyled>
                <ModalContentStyled ref={ref} transition={transition}>
                    {dismissible && <ModalCloseStyled onClick={remove} icon={Times}/>}

                    {children}
                </ModalContentStyled>
            </ModalWrapperStyled>
        </>
    );
}

export default Modal;