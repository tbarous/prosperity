import React, {isValidElement, ReactElement, ReactNode, Children} from "react";
import CarouselControlsStyled from "@components/carousel/styled/CarouselControlsStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {BasicComponentProps} from "@typings";

export interface CarouselControlsProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    isOnStart?: boolean,
    isOnEnd?: boolean,

    updateDistance: (distance: any) => void,
    distance: number,
    itemWidth: number
}

const CarouselControls: React.FunctionComponent<CarouselControlsProps> = (props: CarouselControlsProps): ReactElement => {
    const {children, className, isOnStart, isOnEnd, updateDistance, distance, itemWidth} = props;

    function onMove(direction?: CarouselDirections): void {
        if (direction === CarouselDirections.LEFT) {
            updateDistance(distance - itemWidth)
        }

        if (direction === CarouselDirections.RIGHT) {
            updateDistance(distance + itemWidth)
        }
    }

    function getChild(child: ReactNode & { props: { onMove?: (direction: CarouselDirections) => void, direction?: CarouselDirections, } }): ReactElement | undefined | boolean {
        const direction = child.props.direction;

        if (!direction) return;

        if ((direction === CarouselDirections.LEFT && isOnStart) || (direction === CarouselDirections.RIGHT && isOnEnd)) return;

        return isValidElement(child) && React.cloneElement(child, {onMove});
    }

    return (
        <CarouselControlsStyled className={className}>
            {Children.map<ReactNode, any>(children, getChild)}
        </CarouselControlsStyled>
    )
}

export default CarouselControls;