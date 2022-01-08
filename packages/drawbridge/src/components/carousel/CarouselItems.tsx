import React, {Children, ReactElement, ReactNode, useEffect} from "react";
import CarouselItemsStyled from "@components/carousel/styled/CarouselItemsStyled";
import {fn} from "@helpers";
import {clone} from "@utils/ComponentUtils";

export interface CarouselItemsProps {
    children: ReactNode,
    className?: string,
    gutter?: number,
    itemWidth?: number,
    distance?: number,
    getCount?: (count: number) => void,
    getItemDistance?: (index: number) => number
}

const CarouselItems: React.FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps): ReactElement => {
    const {
        children,
        className,
        gutter = 0,
        itemWidth,
        distance = 0,
        getCount = fn,
        getItemDistance = () => 0
    } = props;

    console.log(distance)

    function sendCount() {
        const slidesCount = Children.count(children);

        getCount(slidesCount);
    }

    useEffect(sendCount, []);

    return (
        <CarouselItemsStyled
            className={className}
            distance={distance}
            gutter={gutter}
        >
            {Children.map(children, (child: ReactNode, index) => clone(child, {
                itemX: getItemDistance(index),
                gutter,
                itemWidth
            }))}
        </CarouselItemsStyled>
    )
}

export default CarouselItems;