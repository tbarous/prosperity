import {CarouselItemsStyledProps} from "@components/carousel/styled/carousel-items/CarouselItemsStyled";

const CarouselItemsStyledGetters = {
    Width: (props: CarouselItemsStyledProps) => props.theme.dimension.d100,
    Height: (props: CarouselItemsStyledProps) => props.theme.dimension.d100,
    Transform: (props: CarouselItemsStyledProps) => {
        console.log(props.moveDistance);

        return         `translateX(-${props.moveDistance}%)`
    },
    Transition: (props: CarouselItemsStyledProps) => "transform 1s",
}

export default CarouselItemsStyledGetters;