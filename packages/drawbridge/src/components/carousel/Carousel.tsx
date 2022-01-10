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
    const {children, className, items: _items, gutter = 0, current = 0, itemsLg} = props;

    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(current);

    const [dragPosition, setDragPosition] = useState(-1);
    const [endingDragPosition, setEndingDragPosition] = useState(-1);
    const [startingDragPosition, setStartingDragPosition] = useState(-1);

    const {width} = useViewportWidthOnResize();
    const theme = useTheme();
    let items = 2;
    if (_items) items = _items;
    if (itemsLg && width > theme.breakpoint.lg) items = itemsLg;

    useEffect(() => {
        if (count === 0) return;
        const countReached = current > count - items;
        if (countReached || current < 0 || current === position) return;
        setPosition(current);
    }, [current]);

    // useEffect(() =>{
    //     if(endingDragPosition>0){
    //         setDragPosition(false)
    //     }
    // }, [endingDragPosition])

    // useEffect(() => {
    //     if (dragPosition === false) {
    //         onMoveToClosest(endingDragPosition)
    //     }
    // }, [dragPosition])

    const itemWidth = 100 / items;
    const isOnStart = position === 0;
    const isOnEnd = position === count - items;
    const distance = position * itemWidth;
    const childProps = {
        isOnStart,
        isOnEnd,
        gutter,
        itemWidth,
        distance,
        onMove,
        getCount,
        getItemDistance,
        dragPosition: dragPosition * itemWidth
    }

    function getCount(count: number): void {
        setCount(count)
    }

    function getItemDistance(index: number): number {
        return index * itemWidth;
    }

    function onDrag(e) {
        var xPercent = e.pageX / window.innerWidth;
        if (xPercent !== 0) {
            const diff = (startingDragPosition - xPercent);
            setDragPosition(diff*3)
        }
    }

    function onDragExit(e) {
        setEndingDragPosition(dragPosition)
    }

    function onDragStart(e) {
        console.log(position + e.pageX / window.innerWidth)
        setStartingDragPosition(position + e.pageX / window.innerWidth)
    }

    function onMoveToClosest(pos) {
        setPosition(position+pos)
        for (let i = 0; i < count; i++) {}
    }

    function onMove(direction?: CarouselDirections): void {
        if (direction === CarouselDirections.LEFT) {
            setPosition(position - 1)
        }

        if (direction === CarouselDirections.RIGHT) {
            setPosition(position + 1)
        }
    }

    return (
        <>
            position: {position}
            <br/>
            distance: {distance}
            <br/>
            dragPosition: {dragPosition}
            <br/>
            endingDragPosition: {endingDragPosition}
            <br/>
            startingDragPosition: {startingDragPosition}

            <CarouselStyled className={className} onDrag={onDrag} onDragStart={onDragStart} onDragEnd={onDragExit}>
                {Children.map(children, (child: ReactNode) => clone(child, childProps))}
            </CarouselStyled>
        </>

    )
}

export default Carousel;