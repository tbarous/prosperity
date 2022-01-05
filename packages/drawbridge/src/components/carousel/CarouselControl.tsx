import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirectionEnum} from "@components/carousel/Carousel";

export interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirectionEnum) => void,
    direction?: CarouselDirectionEnum,
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
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