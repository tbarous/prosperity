import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    itemWidth?: number;
    leftDistance?: number;
    gutter?: number;
}
declare const CarouselItem: React.FunctionComponent<Props>;
export default CarouselItem;
