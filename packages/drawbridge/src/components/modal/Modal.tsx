import React, {useRef} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@components/icon/Icons";
import ModalCloseStyled from "./styled/modal-close/ModalCloseStyled";
import ModalOverlayStyled from "./styled/modal-overlay/ModalOverlayStyled";
import ModalContentStyled from "./styled/modal-content/ModalContentStyled";
import useMount, {useMountProps} from "@hooks/useMount";
import {emptyFunction} from "../../helpers/Helpers";

interface Props extends BasicComponentProps, useMountProps {
    closeOnClickOutside?: boolean,
    dismissible?: boolean
}

const Modal: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        closeOnClickOutside,
        mount,
        dismissible,
        delay,
        unmountComponent = emptyFunction,
        onMounted = emptyFunction,
        onUnmounted = emptyFunction
    } = props;

    const modalWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    if (closeOnClickOutside) useOnClickOutside(modalWrapperRef, unmountComponent);

    useMount({delay, mount, onMounted, onUnmounted});

    return (
        <>
            <ModalOverlayStyled
                className={className}
                mount={mount}
                delay={delay}
            />

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0"
            }}>
                <ModalContentStyled
                    ref={modalWrapperRef}
                    mount={mount}
                    delay={delay}
                >
                    {dismissible && <ModalCloseStyled
                        onClick={unmountComponent}
                        width={24}
                        height={24}
                        icon={Times}
                    />}

                    {children}
                </ModalContentStyled>
            </div>
        </>


    );
}

export default Modal;