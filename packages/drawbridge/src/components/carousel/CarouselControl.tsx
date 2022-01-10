import React, {ReactElement} from "react";
import CarouselControlStyled from "@components/carousel/styled/CarouselControlStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {BasicComponentProps} from "@typings";
import CarouselControlIconStyled from "./styled/CarouselControlIconStyled";
import {ArrowCircleLeftSolid, ArrowCircleRightSolid} from "@icons";

export interface CarouselControlProps extends BasicComponentProps {
    moveLeft?: () => void,
    moveRight?: () => void,
    direction?: CarouselDirections
}

const CarouselControl: React.FunctionComponent<CarouselControlProps> = (props: CarouselControlProps): ReactElement => {
    const {children, className, direction, moveLeft, moveRight} = props;

    function onClick() {
        if (direction === CarouselDirections.LEFT) {
            moveLeft && moveLeft();
        }

        if (direction === CarouselDirections.RIGHT) {
            moveRight && moveRight();
        }
    }

    let icon = ArrowCircleLeftSolid;

    if (direction === CarouselDirections.RIGHT) {
        icon = ArrowCircleRightSolid;
    }

    return (
        <CarouselControlStyled onClick={onClick} direction={direction} className={className}>
            {children}

            {!children && <CarouselControlIconStyled icon={icon}/>}
        </CarouselControlStyled>
    )
}

export default CarouselControl;