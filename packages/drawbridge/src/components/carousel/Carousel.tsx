import React, {ReactNode, Children, useState, useEffect, ReactElement, useRef} from "react";
import CarouselStyled from "@components/carousel/styled/CarouselStyled";
import {clone} from "@utils/ComponentUtils";

export enum CarouselDirections {
    LEFT = "left",
    RIGHT = "right"
}

export interface CarouselProps {
    children: ReactNode,
    className?: string
    itemsPerSlide?: number,
    gutter?: number,
    changeToSlide?: number
}

const Carousel: React.FunctionComponent<CarouselProps> = (props: CarouselProps): ReactElement => {
    const {
        children,
        className,
        itemsPerSlide = 2,
        gutter = 0,
        changeToSlide = 0
    } = props;

    const [position, setPosition] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) return;
        const countReached = changeToSlide > count - itemsPerSlide;
        if (countReached || changeToSlide < 0) return;
        if(changeToSlide===position)return;
        setPosition(changeToSlide);
    }, [count]);

    const itemWidth = 100 / itemsPerSlide;

    const childProps = {
        isOnStart: position === 0,
        isOnEnd: position === count - itemsPerSlide,
        gutter,
        itemWidth,
        distance: position * itemWidth,
        onMove,
        getCount,
        getItemDistance
    }

    function onMove(direction: CarouselDirections): void {
        setPosition(direction === CarouselDirections.LEFT ? position - 1 : position + 1);
    }

    function getCount(count: number): void {
        setCount(count)
    }

    function getItemDistance(index: number): number {
        return index * itemWidth;
    }

    return (
        <CarouselStyled className={className}>
            {Children.map(children, (child: ReactNode) => clone(child, childProps))}
        </CarouselStyled>
    )
}

export default Carousel;