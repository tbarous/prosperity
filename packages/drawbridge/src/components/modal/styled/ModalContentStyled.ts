import styled, {css, keyframes} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";
import {transformY, transition} from "@utils/ThemeUtils";

interface ModalContentStyledProps extends StyledProps {
    transition: boolean
}

type T = ModalContentStyledProps;

function getTransform(p: T) {
    return transformY(p.transition, -500);
}

function getTransition(p: T) {
    return transition({ms: p.theme.animation.modal});
}

const ModalContentStyled = styled.div<T>`
  background-color: ${(p: T) => p.theme.color.white};
  border-radius: ${(p: T) => p.theme.borderRadius.medium};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d80};
  ${(p: T) => MediaUtils.up(p.theme.breakpoint.md, css`width: 500px;`)};
  transition: ${getTransition};
  transform: ${getTransform};
`;

export default ModalContentStyled;