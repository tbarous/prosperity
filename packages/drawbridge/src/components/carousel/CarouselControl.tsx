import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";

export interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    direction?: CarouselDirections,
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
    const {
        children,
        className,
        direction = CarouselDirections.RIGHT,
        onMove = () => {}
    } = props;

    return (
        <CarouselControlStyled
            onClick={() => onMove(direction)}
            direction={direction}
            className={className}
        >
            {children}
        </CarouselControlStyled>
    )
}

export default CarouselControl;