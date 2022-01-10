import React, {ReactNode, Children, useState, useEffect, ReactElement, FunctionComponent} from "react";
import CarouselStyled from "@components/carousel/styled/CarouselStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";
import useViewportDimensions from "@hooks/useViewportDimensions";
import {useTheme} from "styled-components";
import useViewportWidthOnResize from "@hooks/useViewportWidthOnResize";

export enum CarouselDirections {
    LEFT = "left",
    RIGHT = "right"
}

export interface CarouselProps extends BasicComponentProps {
    items?: number,
    itemsLg?: number,
    gutter?: number,
    current?: number
}

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps): ReactElement => {
    const {children, className, items: _items, gutter = 0, current = 0, itemsLg} = props;

    const [position, setPosition] = useState(current);

    const {width} = useViewportWidthOnResize();

    const theme = useTheme();

    let items = 2;

    if (_items) items = _items;
    if (itemsLg && width > theme.breakpoint.lg) items = itemsLg;

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) return;

        const countReached = current > count - items;

        if (countReached || current < 0 || current === position) return;

        setPosition(current);
    }, [current]);

    const itemWidth = 100 / items;

    const childProps = {
        isOnStart: position === 0,
        isOnEnd: position === count - items,
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