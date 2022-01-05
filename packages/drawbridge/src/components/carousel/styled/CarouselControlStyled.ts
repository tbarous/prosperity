import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";
import rules from "@rules";

export interface CarouselControlStyledProps extends StyledProps {
    direction?: CarouselDirectionEnum
}

const left = (props: CarouselControlStyledProps) => props.direction === CarouselDirectionEnum.LEFT ? "1rem" : "auto";
const right = (props: CarouselControlStyledProps) => props.direction === CarouselDirectionEnum.RIGHT ? "1rem" : "auto";

const CarouselControlStyled = styled.div<CarouselControlStyledProps>`
  z-index: 99;
  position: ${rules.position.absolute};
  cursor: ${rules.cursor.pointer};
  left: ${left};
  right: ${right};
`;

export default CarouselControlStyled;