import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CarouselStyledProps extends StyledProps {
}

const CarouselStyled = styled.div<CarouselStyledProps>`
  display: ${rules.display.flex};
  position: ${rules.position.relative};
  overflow: hidden;
  width: ${(props: CarouselStyledProps) => props.theme.dimension.d100};
  height: ${(props: CarouselStyledProps) => props.theme.dimension.d100};
`;

export default CarouselStyled;