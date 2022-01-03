import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import ModalContentStyledGetters from "@components/modal/styled/modal-content/ModalContentStyledGetters";

export interface ModalContentStyledProps extends StyledProps {
    unmounting?: boolean,
    delay?: number
}

const ModalContentStyled = styled.div<ModalContentStyledProps>`
  background-color: ${ModalContentStyledGetters.BackgroundColor};
  border-radius: ${ModalContentStyledGetters.BorderRadius};
  box-shadow: ${ModalContentStyledGetters.BoxShadow};
  width: ${ModalContentStyledGetters.Width};
  height: ${ModalContentStyledGetters.Height};
  animation: ${ModalContentStyledGetters.Animation};
  animation-timing-function: ${ModalContentStyledGetters.AnimationTimingFunction};
  animation-fill-mode: ${ModalContentStyledGetters.AnimationFillMode};

  ${(props: ModalContentStyledProps) => Media.up(props.theme.breakpoint.md, css`
    width: ${ModalContentStyledGetters.WidthMd(props)};
  `)};
`;

export default ModalContentStyled;