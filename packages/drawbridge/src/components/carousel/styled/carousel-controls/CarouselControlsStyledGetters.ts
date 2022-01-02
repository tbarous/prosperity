import {CarouselControlsStyledProps} from "@components/carousel/styled/carousel-controls/CarouselControlsStyled";

const CarouselControlsStyledGetters = {
    Position: (props: CarouselControlsStyledProps) => props.theme.position.absolute,
    Width: (props: CarouselControlsStyledProps) => props.theme.dimension.d100,
    Height: (props: CarouselControlsStyledProps) => props.theme.dimension.d100,
    Display: (props: CarouselControlsStyledProps) => props.theme.display.flex,
    AlignItems: (props: CarouselControlsStyledProps) => props.theme.alignItems.center,
}

export default CarouselControlsStyledGetters;