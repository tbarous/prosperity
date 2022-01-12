import styled from "styled-components";
import {StyledProps} from "@typings";
import {CardUIProps} from "@atoms/card/Card";

export interface CardStyledProps extends StyledProps, CardUIProps {}

type T = CardStyledProps;

function getBorderRadius(p: T) {
    if (p.rounded) {
        return p.theme.borderRadius.medium;
    }
}

const CardStyled = styled.div<T>`
  border-radius: ${getBorderRadius};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  background-color: ${(p: T) => p.theme.color.surface};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  transition: ${(p: T) => p.theme.transition.elevation};
  &:hover {box-shadow: ${(p: T) => p.theme.shadow.elevate};}
`;

export default CardStyled;