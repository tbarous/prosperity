import {CarouselStyledProps} from "@components/carousel/styled/carousel/CarouselStyled";

const CarouselStyledGetters = {
    Position: (props: CarouselStyledProps) => props.theme.position.relative,
    Width: (props: CarouselStyledProps) => props.theme.dimension.d100,
    Display: (props: CarouselStyledProps) => props.theme.display.flex,
    Overflow: (props: CarouselStyledProps) => "hidden",
    Height: (props: CarouselStyledProps) => props.theme.dimension.d100,
}

export default CarouselStyledGetters;