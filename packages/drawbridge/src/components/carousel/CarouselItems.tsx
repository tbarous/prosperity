import React, {Children, ReactElement, ReactNode, useEffect} from "react";
import {BasicComponentProps} from "@typings";
import CarouselItemsStyled from "@components/carousel/styled/CarouselItemsStyled";

export interface CarouselItemsProps extends BasicComponentProps {
    gutter?: number,
    itemWidth?: number,
    moveDistance?: number,
    getCount?: (count: number) => void,
    getLeftDistance?: (index: number) => number,
    speed?: number
}

const CarouselItems: React.FunctionComponent<CarouselItemsProps> = (props: CarouselItemsProps): ReactElement => {
    const {
        children,
        className,
        gutter,
        itemWidth,
        moveDistance,
        speed,
        getCount = () => {
        },
        getLeftDistance = () => 1
    } = props;

    useEffect(() => getCount && getCount(Children.count(children)), []);

    return (
        <CarouselItemsStyled
            className={className}
            moveDistance={moveDistance}
            gutter={gutter}
            speed={speed}
        >
            {Children.map(children, (child: ReactNode, index) => {
                return React.isValidElement(child) && React.cloneElement(child, {
                    leftDistance: getLeftDistance(index),
                    gutter,
                    itemWidth
                })
            })}
        </CarouselItemsStyled>
    )
}

export default CarouselItems;