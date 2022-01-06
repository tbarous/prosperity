import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    gutter?: number;
}
declare const Col: React.FunctionComponent<Props>;
export default Col;
