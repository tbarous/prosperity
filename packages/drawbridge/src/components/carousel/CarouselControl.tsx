import React, {ReactElement, ReactNode} from "react";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {fn} from "@helpers";

export interface CarouselControlProps {
    children: ReactNode,
    className?: string,
    onMove?: (direction: CarouselDirections) => void,
    direction?: CarouselDirections,
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
    const {
        children,
        className,
        direction = CarouselDirections.RIGHT,
        onMove = fn
    } = props;

    function onClick(): void {
        onMove(direction);
    }

    return (
        <CarouselControlStyled
            onClick={onClick}
            direction={direction}
            className={className}
        >
            {children}
        </CarouselControlStyled>
    )
}

export default CarouselControl;