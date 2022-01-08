import React, {ReactNode, Children, useState, useEffect, ReactElement} from "react";
import CarouselStyled from "@components/carousel/styled/CarouselStyled";

export enum CarouselDirections {
    LEFT = "left",
    RIGHT = "right"
}

export interface CarouselProps {
    children: ReactNode,
    className?: string
    itemsPerSlide?: number,
    gutter?: number,
    start?: number,
    change?: number
}

const Carousel: React.FunctionComponent<CarouselProps> = (props: CarouselProps): ReactElement => {
    const {
        children,
        className,
        itemsPerSlide = 2,
        gutter = 0,
        start = 0,
        change
    } = props;

    const [position, setPosition] = useState(start);
    const [count, setCount] = useState(0);

    const isOnStart = position === 0;

    const isOnEnd = position === count - itemsPerSlide;

    const onMove = (direction: CarouselDirections) => setPosition(direction === CarouselDirections.LEFT ? position - 1 : position + 1);

    const getCount = (count: number) => setCount(count);

    const itemWidth = 100 / itemsPerSlide;

    const getLeftDistance = (index: number) => index * itemWidth;

    const moveDistance = position * itemWidth;

    const childProps = {
        isOnStart,
        isOnEnd,
        gutter,
        onMove,
        getCount,
        itemWidth,
        moveDistance,
        getLeftDistance
    }

    useEffect(() => {
        if (typeof change !== "number") return;

        const countReached = change <= count - itemsPerSlide;

        const changeLessThanZero = change >= 0;

        if (countReached || changeLessThanZero) return;

        setPosition(change);
    }, [change])

    return (
        <CarouselStyled className={className}>
            {Children.map(children, (child: ReactNode) => React.isValidElement(child) && React.cloneElement(child, childProps))}
        </CarouselStyled>
    )
}

export default Carousel;