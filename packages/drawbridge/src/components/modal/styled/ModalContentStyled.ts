import styled, {css} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";

export interface ModalContentStyledProps extends StyledProps, useMountChildStyledProps {
}

const transform = (props: ModalContentStyledProps) => props.mount ? `translateY(0)` : `translateY(-130%)`;
const transition = (props: ModalContentStyledProps) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`;

const ModalContentStyled = styled.div<ModalContentStyledProps>`
  background-color: ${(props: ModalContentStyledProps) => props.theme.color.white};
  border-radius: ${(props: ModalContentStyledProps) => props.theme.borderRadius.medium};
  box-shadow: ${(props: ModalContentStyledProps) => props.theme.shadow.medium};
  width: ${(props: ModalContentStyledProps) => props.theme.dimension.d100};
  height: ${(props: ModalContentStyledProps) => props.theme.dimension.d80};
  transform: ${transform};
  transition: ${transition};

  ${(props: ModalContentStyledProps) => MediaUtils.up(props.theme.breakpoint.md, css`
    width: 500px;
  `)};
`;

export default ModalContentStyled;