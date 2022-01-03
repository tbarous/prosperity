import React, {useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@components/icon/Icons";
import ModalCloseStyled from "./styled/modal-close/ModalCloseStyled";
import ModalOverlayStyled from "./styled/modal-overlay/ModalOverlayStyled";
import ModalContentStyled from "./styled/modal-content/ModalContentStyled";
import useUnmount, {useUnmountProps} from "@hooks/useUnmount";

interface Props extends BasicComponentProps, useUnmountProps {
    closeOnClickOutside?: boolean,
}

const Modal: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        closeOnClickOutside,
        unmounting,
        delay,
        onEndUnmount = () => {},
        onStartUnmount = () => {}
    } = props;

    const modalWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    if (closeOnClickOutside) useOnClickOutside(modalWrapperRef, close);

    useUnmount({delay, unmounting, onEndUnmount, onStartUnmount});

    return (
        <ModalOverlayStyled
            className={className}
            unmounting={unmounting}
        >
            <ModalContentStyled
                ref={modalWrapperRef}
                unmounting={unmounting}
                delay={delay}
            >
                <ModalCloseStyled
                    onClick={onStartUnmount}
                    width={14}
                    height={14}
                    icon={Times}
                />

                {children}
            </ModalContentStyled>
        </ModalOverlayStyled>
    );
}

export default Modal;