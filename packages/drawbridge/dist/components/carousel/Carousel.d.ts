import React from "react";
import { BasicComponentProps } from "../../typings/index";
export declare enum CarouselDirectionEnum {
    LEFT = "left",
    RIGHT = "right"
}
export interface CarouselProps extends BasicComponentProps {
    itemsPerSlide?: number;
    gutter?: number;
    start?: number;
    change?: number;
    speed?: number;
}
declare const Carousel: React.FunctionComponent<CarouselProps>;
export default Carousel;
