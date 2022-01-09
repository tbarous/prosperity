import React, {Children, ReactElement, ReactNode, useEffect} from "react";
import CarouselItemsStyled from "@components/carousel/styled/CarouselItemsStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";

interface CarouselItemsProps extends BasicComponentProps {
    gutter?: number,
    itemWidth?: number,
    distance?: number,
    getCount?: (count: number) => void,
    getItemDistance?: (index: number) => number
}

const CarouselItems: React.FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps): ReactElement => {
    const {children, className, gutter, itemWidth, distance, getCount, getItemDistance} = props;

    useEffect(() => {
        const slidesCount = Children.count(children);

        if (getCount) getCount(slidesCount);
    }, []);

    return (
        <CarouselItemsStyled className={className} distance={distance} gutter={gutter}>
            {Children.map(children, (child: ReactNode, index) => clone(child, {
                itemX: getItemDistance && getItemDistance(index),
                gutter,
                itemWidth
            }))}
        </CarouselItemsStyled>
    )
}

export default CarouselItems;