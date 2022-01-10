import React, {Children, ReactElement, ReactNode, useEffect, useState} from "react";
import CarouselItemsStyled from "@components/carousel/styled/CarouselItemsStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";

interface CarouselItemsProps extends BasicComponentProps {
    gutter?: number,
    itemWidth?: number,
    distance?: number,
    getCount?: (count: number) => void,
    getItemDistance?: (index: number) => number,

    dragDistance: any
}

const CarouselItems: React.FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps): ReactElement => {
    const {children, className, gutter, itemWidth, distance, getCount, getItemDistance, updateDistance} = props;

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
            updateDistance(endDragDistance)
        }
    }, [dragDistance])

    function onDrag(e) {
        var xPercent = (e.pageX / window.innerWidth) * 100;

        if (xPercent !== 0) {
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

    let style;
    if (dragDistance) {
        style = {transform: `translateX(-${distance + dragDistance}%)`}
    }

    return (
        <CarouselItemsStyled
            onDrag={onDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragExit}
            dragDistance={dragDistance}
            style={style}
            className={className}
            distance={distance}
            gutter={gutter}
        >
            {Children.map(children, (child: ReactNode, index) => clone(child, {
                itemX: index * itemWidth,
                gutter,
                itemWidth
            }))}
        </CarouselItemsStyled>
    )
}

export default CarouselItems;