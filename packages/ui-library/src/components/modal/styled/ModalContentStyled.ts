import styled, {css} from "styled-components";
import {closeModalAnimation, openModalAnimation} from "@components/modal/utils/AnimationsUtils";
import {up} from "@theme/utils/Media";
import {StyledProps} from "@typings";

const animationDuration: string = ".4s";

interface Props extends StyledProps {
    unmounting: boolean,
}

const ModalContentStyled = styled.div<Props>`
  background: ${(props: Props) => props.theme.color.white};
  border-radius: ${(props: Props) => props.theme.border.radius.primary};
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  width: ${(props: Props) => props.theme.dimension.d100};
  animation: ${(props: Props) => !props.unmounting ? css`${openModalAnimation} ${animationDuration}` : css`${closeModalAnimation} ${animationDuration}`};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  height: 80%;

  ${props => up(props.theme.breakpoint.md, `
    width: 500px;
  `)};
`;

export default ModalContentStyled;