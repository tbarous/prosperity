import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { CarouselDirectionEnum } from "../carousel/Carousel";
interface Props extends BasicComponentProps {
    onMove?: (direction: CarouselDirectionEnum) => void;
    isOnStart?: boolean;
    isOnEnd?: boolean;
}
declare const CarouselControls: React.FunctionComponent<Props>;
export default CarouselControls;
