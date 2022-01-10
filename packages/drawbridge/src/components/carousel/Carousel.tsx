import React, {ReactNode, Children, useState, useEffect, ReactElement, FunctionComponent} from "react";
import CarouselStyled from "@components/carousel/styled/CarouselStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";
import useViewportDimensions from "@hooks/useViewportDimensions";
import {useTheme} from "styled-components";
import useViewportWidthOnResize from "@hooks/useViewportWidthOnResize";
import useDebounce from "@hooks/useDebounce";

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
    const {children, className, items = 2, gutter = 0, current = 0, itemsLg} = props;

    const [count, setCount] = useState(0);

    // Distance from the left in PERCENTAGE
    const [distance, setDistance] = useState(0);

    const [dragDistance, setDragDistance] = useState(undefined);
    const [endDragDistance, setEndDragDistance] = useState(0);
    const [startDragDistance, setStartDragDistance] = useState(0);

    // const {width} = useViewportWidthOnResize();
    // const theme = useTheme();
    // let items = 2;
    // if (_items) items = _items;
    // if (itemsLg && width > theme.breakpoint.lg) items = itemsLg;

    // useEffect(() => {
    //     if (count === 0) return;
    //     const countReached = current > count - items;
    //     if (countReached || current < 0 || current === position) return;
    //     setPosition(current);
    // }, [current]);

    useEffect(() => {
        if (endDragDistance > 0) {
            setDragDistance(false)
        }
    }, [endDragDistance])

    useEffect(() => {
        if (dragDistance === false) {
            onMoveToClosest(endDragDistance)
        }
    }, [dragDistance])

    const itemWidth = 100 / items;

    const isOnStart = distance < itemWidth;

    const isOnEnd = false //= position === count - items;

    const childProps = {isOnStart, isOnEnd, gutter, itemWidth, onMove, getCount, dragDistance, distance}

    function getCount(count: number): void {
        setCount(count)
    }

    function onDrag(e) {
        var xPercent = (e.pageX / window.innerWidth) * 100;

        if (xPercent !== 0) {
            const diff = (startDragDistance - xPercent);
            setDragDistance(diff)
        }
    }

    function onDragExit(e) {
        setStartDragDistance(0)
        setEndDragDistance(dragDistance)
    }

    function onDragStart(e) {
        setEndDragDistance(0)
        setStartDragDistance((e.pageX / window.innerWidth) * 100)
    }

    function onMoveToClosest(pos) {
        setDistance(pos)
        for (let i = 0; i < count; i++) {}
    }

    function onMove(direction?: CarouselDirections): void {
        if (direction === CarouselDirections.LEFT) {
            // setPosition(position - 1)
            setDistance(distance - itemWidth)
        }

        if (direction === CarouselDirections.RIGHT) {
            // setPosition(position + 1)
            setDistance(distance + itemWidth)
        }
    }

    return (
        <>
            distance from left: {distance}%
            <br/>
            item width: {itemWidth}%
            <br/>
            dragDistance: {dragDistance}%
            <br/>
            endDragDistance: {endDragDistance}%
            <br/>
            startDragDistance: {startDragDistance}%

            <CarouselStyled className={className} onDrag={onDrag} onDragStart={onDragStart} onDragEnd={onDragExit}>
                {Children.map(children, (child: ReactNode) => clone(child, childProps))}
            </CarouselStyled>
        </>

    )
}

export default Carousel;