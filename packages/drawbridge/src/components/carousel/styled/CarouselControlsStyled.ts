import styled from "styled-components";
import rules from "@rules";
import {StyledProps} from "@typings";

export interface CarouselControlsStyledProps extends StyledProps {
}

const CarouselControlsStyled = styled.div<CarouselControlsStyledProps>`
  position: ${rules.position.absolute};
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  width: ${(props: CarouselControlsStyledProps) => props.theme.dimension.d100};
  height: ${(props: CarouselControlsStyledProps) => props.theme.dimension.d100};
`;


export default CarouselControlsStyled;