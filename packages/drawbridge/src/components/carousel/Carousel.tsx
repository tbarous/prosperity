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

    const count = useRef(0);

    function goToSlide() {
        if (count.current === 0) return;

        const countReached = changeToSlide > count.current - itemsPerSlide;

        if (countReached || changeToSlide < 0) return;

        setPosition(changeToSlide);
    }

    useEffect(goToSlide, [count]);

    const itemWidth = 100 / itemsPerSlide;

    function getItemWidth(){
        return 00 / itemsPerSlide;
    }

    function getChildProps() {
        return {
            isOnStart: position === 0,
            isOnEnd: position === count.current - itemsPerSlide,
            gutter,
            itemWidth,
            distance: position * itemWidth,
            onMove,
            getCount,
            getItemDistance
        };
    }

    function onMove(direction: CarouselDirections): void {
        setPosition(direction === CarouselDirections.LEFT ? position - 1 : position + 1);
    }

    function getCount(_count: number): void {
        count.current = _count;
    }

    function getItemDistance(index: number): number {
        return index * itemWidth;
    }

    return (
        <CarouselStyled className={className}>
            {Children.map(children, (child: ReactNode) => clone(child, getChildProps()))}
        </CarouselStyled>
    )
}

export default Carousel;