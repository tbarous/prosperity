import React, {ReactElement} from "react";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {BasicComponentProps} from "@typings";

interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    direction?: CarouselDirections,
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
    const {children, className, direction, onMove} = props;

    return (
        <CarouselControlStyled onClick={() => onMove && direction && onMove(direction)} direction={direction} className={className}>
            {children}
        </CarouselControlStyled>
    )
}

export default CarouselControl;