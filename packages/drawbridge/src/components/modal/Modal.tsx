import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import ModalOverlayStyled from "@components/modal/styled/ModalOverlayStyled";
import ModalCloseStyled from "@components/modal/styled/ModalCloseStyled";
import ModalContentStyled from "@components/modal/styled/ModalContentStyled";
import {Times} from "@components/icon/Icons";

interface Props extends BasicComponentProps {
    onClose?: () => void,
    closeOnClickOutside?: boolean
}

const Modal: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {onClose, children, closeOnClickOutside} = props;

    const [unmounting, setUnmounting] = useState(false);

    const modalWrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    if (closeOnClickOutside) useOnClickOutside(modalWrapperRef, close);

    function close() {
        setUnmounting(true);
    }

    useEffect(() => {
        if (unmounting) setTimeout(() => onClose && onClose(), 400);
    }, [unmounting]);

    return (
        <ModalOverlayStyled>
            <ModalContentStyled ref={modalWrapperRef} unmounting={unmounting}>
                <ModalCloseStyled onClick={close} width={14} height={14} icon={Times}/>

                {children}
            </ModalContentStyled>
        </ModalOverlayStyled>
    );
}

export default Modal;