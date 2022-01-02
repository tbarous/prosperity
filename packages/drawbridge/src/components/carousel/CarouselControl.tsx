import React from "react";
import CarouselControlStyled from "@components//carousel/styled/carousel-control/CarouselControlStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";

export interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirectionEnum) => void,
    direction?: CarouselDirectionEnum,
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElementOrNull => {
    const {
        children,
        className,
        direction = CarouselDirectionEnum.RIGHT,
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