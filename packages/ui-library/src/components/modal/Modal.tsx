import React, {ReactNode, useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import ModalOverlay from "@components/modal/styled/ModalOverlay";
import ModalClose from "@components/modal/styled/ModalClose";
import ModalContent from "@components/modal/styled/ModalContent";
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
        <ModalOverlay>
            <ModalContent ref={modalWrapperRef} unmounting={unmounting}>
                <ModalClose onClick={close} width={14} height={14} icon={Times}/>

                {children}
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;