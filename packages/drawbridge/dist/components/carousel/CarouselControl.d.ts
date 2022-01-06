import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { CarouselDirectionEnum } from "../carousel/Carousel";
export interface CarouselControlProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirectionEnum) => void;
    direction?: CarouselDirectionEnum;
}
declare const CarouselControl: React.FunctionComponent<CarouselControlProps>;
export default CarouselControl;
