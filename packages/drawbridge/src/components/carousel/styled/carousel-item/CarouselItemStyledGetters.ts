import {CarouselItemStyledProps} from "@components/carousel/styled/carousel-item/CarouselItemStyled";

const CarouselItemStyledGetters = {
    Position: (props: CarouselItemStyledProps) => props.theme.position.absolute,
    Height: (props: CarouselItemStyledProps) => props.theme.dimension.d100,
    BoxSizing: (props: CarouselItemStyledProps) => props.theme.boxSizing.borderBox,
    Padding: (props: CarouselItemStyledProps) => `0 ${props.gutter && props.gutter / 2}px`,
    Width: (props: CarouselItemStyledProps) => `${props.width}%`,
    Left: (props: CarouselItemStyledProps) => `${props.leftDistance}%`,
}

export default CarouselItemStyledGetters;