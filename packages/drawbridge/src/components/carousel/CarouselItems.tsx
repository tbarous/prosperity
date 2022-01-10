import React, {Children, ReactElement, ReactNode, useEffect} from "react";
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
    const {children, className, gutter, itemWidth, distance, getCount, getItemDistance, dragDistance} = props;

    useEffect(() => {
        const slidesCount = Children.count(children);

        if (getCount) getCount(slidesCount);
    }, []);

    let style;
    if (dragDistance) {
        style = {transform: `translateX(-${distance + dragDistance}%)`}
    }

    return (
        <CarouselItemsStyled dragDistance={dragDistance} style={style} className={className}
                             distance={distance}
                             gutter={gutter}>
            {Children.map(children, (child: ReactNode, index) => clone(child, {
                itemX: index * itemWidth,
                gutter,
                itemWidth
            }))}
        </CarouselItemsStyled>
    )
}

export default CarouselItems;