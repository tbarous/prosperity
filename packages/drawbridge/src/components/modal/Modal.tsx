import React, {useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@components/icon/Icons";
import ModalCloseStyled from "./styled/modal-close/ModalCloseStyled";
import ModalOverlayStyled from "./styled/modal-overlay/ModalOverlayStyled";
import ModalContentStyled from "./styled/modal-content/ModalContentStyled";
import {useMountChildProps} from "@hooks/useMountChild";
import ModalWrapperStyled from "./styled/modal-wrapper/ModalWrapperStyled";

interface Props extends BasicComponentProps, useMountChildProps {
    closeOnClickOutside?: boolean,
    dismissible?: boolean
}

const Modal: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        closeOnClickOutside,
        dismissible,
        unmountComponent,
        mount,
        entryDelay,
        exitDelay
    } = props;

    const modalWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    if (closeOnClickOutside) useOnClickOutside(modalWrapperRef, unmountComponent);

    return (
        <>
            <ModalOverlayStyled
                className={className}
                mount={mount}
                entryDelay={entryDelay}
                exitDelay={exitDelay}
            />

            <ModalWrapperStyled>
                <ModalContentStyled
                    ref={modalWrapperRef}
                    mount={mount}
                    entryDelay={entryDelay}
                    exitDelay={exitDelay}
                >
                    {dismissible && <ModalCloseStyled
                        onClick={unmountComponent}
                        width={24}
                        height={24}
                        icon={Times}
                    />}

                    {children}
                </ModalContentStyled>
            </ModalWrapperStyled>
        </>
    );
}

export default Modal;