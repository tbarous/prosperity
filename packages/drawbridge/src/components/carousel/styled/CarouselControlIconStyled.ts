import styled from "styled-components";
import {CarouselDirections} from "@components/carousel/Carousel";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";

export interface CarouselControlIconStyledProps extends StyledProps {
    direction?: CarouselDirections
}

type T = CarouselControlIconStyledProps;

const CarouselControlIconStyled = styled(Icon)`
  width: ${(p: T) => px(p.theme.dimension.carousel.controls.width)};
  height: ${(p: T) => px(p.theme.dimension.carousel.controls.height)};
  color: ${(p: T) => p.theme.color.white}
`;

export default CarouselControlIconStyled;