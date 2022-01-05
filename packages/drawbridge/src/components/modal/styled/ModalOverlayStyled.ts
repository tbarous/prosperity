import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import rules from "@rules";

export interface ModalOverlayStyledProps extends StyledProps, useMountChildStyledProps {
}

const opacity = (props: ModalOverlayStyledProps) => props.mount ? 0.8 : 0;
const transition = (props: ModalOverlayStyledProps) => props.mount ? `opacity ${props.entryDelay / 1000}s` : `opacity ${props.exitDelay / 1000}s`;

const ModalOverlayStyled = styled.div`
  background-color: ${(props: ModalOverlayStyledProps) => props.theme.color.dark};
  display: ${rules.display.flex};
  position: ${rules.position.fixed};
  width: ${(props: ModalOverlayStyledProps) => props.theme.dimension.d100};
  height: ${(props: ModalOverlayStyledProps) => props.theme.dimension.d100};
  align-items: ${rules.alignItems.center};
  left: ${(props: ModalOverlayStyledProps) => props.theme.spacing.s0};
  top: ${(props: ModalOverlayStyledProps) => props.theme.spacing.s0};
  justify-content: ${rules.justifyContent.center};
  opacity: ${opacity};
  transition: ${transition};
`;

export default ModalOverlayStyled;