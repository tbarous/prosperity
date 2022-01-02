import {CarouselControlStyledProps} from "@components/carousel/styled/carousel-control/CarouselControlStyled";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";

const CarouselControlStyledGetters = {
    Position: (props: CarouselControlStyledProps) => props.theme.position.absolute,
    Left: (props: CarouselControlStyledProps) => props.direction === CarouselDirectionEnum.LEFT ? "1rem" : "auto",
    Right: (props: CarouselControlStyledProps) => props.direction === CarouselDirectionEnum.RIGHT ? "1rem" : "auto",
    ZIndex: (props: CarouselControlStyledProps) => 99,
    Cursor: (props: CarouselControlStyledProps) => props.theme.cursor.pointer,
}

export default CarouselControlStyledGetters;