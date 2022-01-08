import React, {ReactElement, ReactNode} from "react";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";

interface T {
    children: ReactNode,
    className?: string,
    onMove?: (direction: CarouselDirections) => void,
    direction?: CarouselDirections,
}

const CarouselControl: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        direction,
        onMove
    } = props;

    function onClick(): void {
        if (onMove && direction) {
            onMove(direction);
        }
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