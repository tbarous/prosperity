import styled, {css} from "styled-components";
import {closeModalAnimation, openModalAnimation} from "@components/modal/utils/AnimationsUtils";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import {
    ModalContentBackgroundColor, ModalContentBorderRadius, ModalContentBoxShadow, ModalContentHeight,
    ModalContentWidth,
    ModalContentWidthMd
} from "@components/modal/styled/ModalContentStyledGetters";

const animationDuration: string = ".4s";

export interface ModalContentStyledProps extends StyledProps {
    unmounting: boolean,
}

const ModalContentStyled = styled.div<ModalContentStyledProps>`
  background: ${ModalContentBackgroundColor};
  border-radius: ${ModalContentBorderRadius};
  box-shadow: ${ModalContentBoxShadow};
  width: ${ModalContentWidth};
  height: ${ModalContentHeight};
  animation: ${(props: ModalContentStyledProps) => !props.unmounting ? css`${openModalAnimation} ${animationDuration}` : css`${closeModalAnimation} ${animationDuration}`};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  ${(props: any) => Media.up(props.theme.breakpoint.md, css`
    width: ${ModalContentWidthMd(props)};
  `)};
`;

export default ModalContentStyled;