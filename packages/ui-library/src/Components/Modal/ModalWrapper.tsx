import React, {ReactNode, useEffect, useLayoutEffect, useRef, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import Theme from "@theme/Theme";
import {down, up} from "@theme/Breakpoint";
import Icon from "../Icon/Icon";
import {Times} from "../Icon/Icons";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {ReactElementOrNull} from "@customTypes/Types";

const animationDuration = ".4s";

const openModalAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const closeModalAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
    background: ${(props: { theme: Theme, unmounting: boolean }) => props.theme.color.white};
    border-radius: ${(props: { theme: Theme, unmounting: boolean }) => props.theme.border.radius.primary};
    box-shadow: ${(props: { theme: Theme, unmounting: boolean }) => props.theme.shadow.primary};
    width: ${(props: { theme: Theme, unmounting: boolean }) => props.theme.spacing.width.full};
    height: 100%;
    animation: ${(props: { theme: Theme, unmounting: boolean }) => !props.unmounting ? css`${openModalAnimation} ${animationDuration}` : css`${closeModalAnimation} ${animationDuration}`};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    
    ${props => up(props.theme.breakpoint.md, `
        width: 500px;
        height: 500px;
    `)};
`;

const TimesButton = styled(Icon)`
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
`;

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

interface Props {
    onClose?: () => void,
    children?: ReactNode
}

const ModalWrapper: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {onClose, children} = props;

    const [unmounting, setUnmounting] = useState(false);

    const modalWrapperRef = useRef(null);

    useOnClickOutside(modalWrapperRef, close);

    function close() {
        setUnmounting(true);
    }

    useEffect(() => {
        if (unmounting) {
            setTimeout(() => {
                onClose && onClose();
            }, 400)
        }
    }, [unmounting]);

    return (
        <Overlay>
            <Wrapper ref={modalWrapperRef} unmounting={unmounting}>
                <TimesButton
                    onClick={close}
                    width={20}
                    height={20}
                    specific={Times}
                />

                {children}
            </Wrapper>
        </Overlay>
    );
}

export default ModalWrapper;