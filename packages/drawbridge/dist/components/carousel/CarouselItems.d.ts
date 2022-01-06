import React from "react";
import { BasicComponentProps } from "../../typings/index";
export interface CarouselItemsProps extends BasicComponentProps {
    gutter?: number;
    itemWidth?: number;
    moveDistance?: number;
    getCount?: (count: number) => void;
    getLeftDistance?: (index: number) => number;
    speed?: number;
}
declare const CarouselItems: React.FunctionComponent<CarouselItemsProps>;
export default CarouselItems;
