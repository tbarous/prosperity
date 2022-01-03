import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {Times} from "@components/icon/Icons";
import ModalCloseStyled from "./styled/modal-close/ModalCloseStyled";
import ModalOverlayStyled from "./styled/modal-overlay/ModalOverlayStyled";
import ModalContentStyled from "./styled/modal-content/ModalContentStyled";

/**
 * Modal Component Props
 */
interface Props extends BasicComponentProps {
    onClose?: () => void,
    closeOnClickOutside?: boolean
}

/**
 * Modal Component
 * @param props
 * @constructor
 */
const Modal: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        closeOnClickOutside,
        onClose = () => {
        },
    } = props;

    /**
     * Watching if the modal starts to unmount.
     */
    const [unmounting, setUnmounting] = useState(false);

    /**
     * References modal wrapper element.
     */
    const modalWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    /**
     * Starts the unmount process.
     */
    const close = () => setUnmounting(true);

    /**
     * Enables closing modal upon clicking
     * outside the modal wrapper element.
     */
    if (closeOnClickOutside) useOnClickOutside(modalWrapperRef, close);

    /**
     * If unmounting process starts, trigger the onClose
     * callback after performing the closing animation.
     */
    const timeoutRef = useRef<any>(null);

    /**
     * When unmounting gets true, trigger the onClose after 4ms
     * to display to closing animation
     */
    useEffect(() => {
        if (unmounting) timeoutRef.current = setTimeout(() => onClose(), 400);

        return () => clearTimeout(timeoutRef.current);
    }, [unmounting]);

    return (
        <ModalOverlayStyled
            className={className}
        >
            <ModalContentStyled
                ref={modalWrapperRef}
                unmounting={unmounting}
            >
                <ModalCloseStyled
                    onClick={close}
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