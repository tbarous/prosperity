import React, {ReactNode, Children, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import CarouselStyled from "./styled/carousel/CarouselStyled";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";

export interface CarouselProps extends BasicComponentProps {
    itemsPerSlide?: number,
    gutter?: number,
    start?: number
}

const Carousel: React.FunctionComponent<CarouselProps> = (props: CarouselProps): ReactElementOrNull => {
    const {
        children,
        className,
        itemsPerSlide = 2,
        gutter = 0,
        start = 0
    } = props;

    /**
     * The current position of the carousel.
     * Default: 0
     */
    const [position, setPosition] = useState(start);

    /**
     * The number of carousel items.
     * This has to be passed from the CarouselItems child component.
     */
    const [count, setCount] = useState(0);

    /**
     * The carousel is showing the first item.
     */
    const isOnStart = position === 0;

    /**
     * The carousel is showing the last item.
     */
    const isOnEnd = position === count - itemsPerSlide;

    /**
     * Add or subtract from position on each move.
     */
    const onMove = (direction: CarouselDirectionEnum) => setPosition(direction === CarouselDirectionEnum.LEFT ? position - 1 : position + 1);

    /**
     * Gets the total number of items.
     * @param count
     */
    const getCount = (count: number) => setCount(count);

    /**
     * The width of each item in percentage.
     */
    const itemWidth = 100 / itemsPerSlide;

    /**
     * Calculates the item's distance from the left.
     * @param index
     */
    const getLeftDistance = (index: number) => index * itemWidth;

    /**
     * How much an item has to move on each swipe.
     */
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

    return (
        <CarouselStyled className={className}>
            {Children.map(children, (child: ReactNode) => React.isValidElement(child) && React.cloneElement(child, childProps))}
        </CarouselStyled>
    )
}

export default Carousel;