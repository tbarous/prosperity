import styled, {css} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import MediaUtils from "@theme/utils/MediaUtils";
import ModalContentStyledGetters from "@components/modal/styled/modal-content/ModalContentStyledGetters";

export interface ModalContentStyledProps extends StyledProps, useMountChildStyledProps {
}

const ModalContentStyled = styled.div<ModalContentStyledProps>`
  background-color: ${ModalContentStyledGetters.BackgroundColor};
  border-radius: ${ModalContentStyledGetters.BorderRadius};
  box-shadow: ${ModalContentStyledGetters.BoxShadow};
  width: ${ModalContentStyledGetters.Width};
  height: ${ModalContentStyledGetters.Height};
  transform: ${ModalContentStyledGetters.Transform};
  transition: ${ModalContentStyledGetters.Transition};

  ${(props: ModalContentStyledProps) => MediaUtils.up(props.theme.breakpoint.md, css`
    width: ${ModalContentStyledGetters.WidthMd(props)};
  `)};
`;

export default ModalContentStyled;