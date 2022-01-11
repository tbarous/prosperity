import React, {Children, ReactElement, ReactNode, useEffect, useState} from "react";
import CarouselItemsStyled from "@components/carousel/styled/CarouselItemsStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";

interface CarouselItemsProps extends BasicComponentProps {
    gutter?: number,
    itemWidth?: number,
    distance?: number,
    getCount?: (count: number) => void,
    updateDistance?: (distance: number) => void
}

const CarouselItems: React.FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps): ReactElement => {
    const {children, className, gutter, itemWidth, distance, getCount, updateDistance, items, moveLeft, moveRight, moveClosest} = props;

    const [dragDistance, setDragDistance] = useState(undefined);
    const [endDragDistance, setEndDragDistance] = useState(0);
    const [startDragDistance, setStartDragDistance] = useState(0);

    useEffect(() => {
        const slidesCount = Children.count(children);

        if (getCount) getCount(slidesCount);
    }, []);

    useEffect(() => {
        if (endDragDistance > 0) {
            setDragDistance(false)
        }
    }, [endDragDistance])

    useEffect(() => {
        if (dragDistance === false) {
            // updateDistance(endDragDistance)
            moveClosest(endDragDistance)
        }
    }, [dragDistance])

    function onDrag(e) {
        var xPercent = (e.pageX / window.innerWidth) * 100;

        const reachedEnd = startDragDistance > xPercent && dragDistance + distance > itemWidth * Children.count(children) - items * itemWidth;
        const reachedStart = startDragDistance < xPercent && distance + dragDistance < 0;

        if (reachedStart) updateDistance(0);

        if (xPercent > 0 && !reachedEnd && !reachedStart) {
            const diff = (startDragDistance - xPercent);
            setDragDistance(diff)
        }
    }

    function onDragExit(e) {
        setStartDragDistance(0)
        setEndDragDistance(distance + dragDistance)
    }

    function onDragStart(e) {
        setEndDragDistance(0)
        setStartDragDistance((e.pageX / window.innerWidth) * 100)
    }

    return (
        <>
            dragDistance: {dragDistance}
            <br/>
            sum: {dragDistance + distance}
            totalwidth: {itemWidth * Children.count(children)}
            <CarouselItemsStyled
                onDrag={onDrag}
                onDragStart={onDragStart}
                onDragEnd={onDragExit}
                dragDistance={dragDistance}
                style={{transform: `translateX(-${distance + dragDistance}%)`}}
                className={className}
                distance={distance}
                gutter={gutter}
            >
                {Children.map(children, (child: ReactNode, index) => {
                    return clone(child, {
                        distance: index * itemWidth,
                        gutter,
                        width: itemWidth,
                    })
                })}
            </CarouselItemsStyled>
        </>

    )
}

export default CarouselItems;