import {CarouselItemsStyledProps} from "@components/carousel/styled/carousel-items/CarouselItemsStyled";

const CarouselItemsStyledGetters = {
    Width: (props: CarouselItemsStyledProps) => props.theme.dimension.d100,
    Height: (props: CarouselItemsStyledProps) => props.theme.dimension.d100,
    Transform: (props: CarouselItemsStyledProps) => `translateX(-${props.moveDistance}%)`,
    Transition: (props: CarouselItemsStyledProps) => `transform ${props.speed}s ease-out`,
    MarginLeft: (props: CarouselItemsStyledProps) => props.gutter && `-${props.gutter}px`,
    MarginRight: (props: CarouselItemsStyledProps) => props.gutter && `-${props.gutter}px`,
    PaddingLeft: (props: CarouselItemsStyledProps) => props.gutter && `${props.gutter}px`,
    PaddingRight: (props: CarouselItemsStyledProps) => props.gutter && `${props.gutter}px`,
}

export default CarouselItemsStyledGetters;