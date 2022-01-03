import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import ModalContentStyledGetters from "@components/modal/styled/modal-content/ModalContentStyledGetters";

export interface ModalContentStyledProps extends StyledProps {
    mount?: boolean,
    delay?: number
}

const ModalContentStyled = styled.div<ModalContentStyledProps>`
  background-color: ${ModalContentStyledGetters.BackgroundColor};
  border-radius: ${ModalContentStyledGetters.BorderRadius};
  box-shadow: ${ModalContentStyledGetters.BoxShadow};
  width: ${ModalContentStyledGetters.Width};
  height: ${ModalContentStyledGetters.Height};
  transform: ${ModalContentStyledGetters.Transform};
  transition: ${ModalContentStyledGetters.Transition};

  ${(props: ModalContentStyledProps) => Media.up(props.theme.breakpoint.md, css`
    width: ${ModalContentStyledGetters.WidthMd(props)};
  `)};
`;

export default ModalContentStyled;