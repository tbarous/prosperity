import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export interface InputStyledProps extends StyledProps {
    focused?: boolean,
}

type T = InputStyledProps;

function getPadding(p: T) {
    return px(p.theme.spacing.s0);
}

function getMargin(p: T) {
    return px(p.theme.spacing.s0);
}

const InputStyled = styled.input<T>`
  padding: ${getPadding};
  margin: ${getMargin};
  border: ${(p: T) => p.theme.border.none};
  height: ${(p: T) => p.theme.dimension.d100};
  width: ${(p: T) => p.theme.dimension.d100};
  font-size: ${(p: T) => p.theme.fontSize.md};
  border-radius: ${(p: T) => p.theme.borderRadius.medium};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  outline: none;
`;

export default InputStyled;