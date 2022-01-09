import React, {ReactElement} from "react";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {BasicComponentProps} from "@typings";
import CarouselControlIconStyled from "./styled/CarouselControlIconStyled";
import {ArrowCircleLeftSolid, ArrowCircleRightSolid} from "@icons";

export interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    direction?: CarouselDirections
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
    const {children, className, direction, onMove} = props;

    return (
        <CarouselControlStyled onClick={() => onMove && direction && onMove(direction)} direction={direction} className={className}>
            {children}

            {!children && <CarouselControlIconStyled icon={direction === CarouselDirections.LEFT ? ArrowCircleLeftSolid : ArrowCircleRightSolid}/>}
        </CarouselControlStyled>
    )
}

export default CarouselControl;