import React from "react";
import { BasicComponentProps } from "../../typings/index";
export interface Props extends BasicComponentProps {
    width?: number;
    height?: number;
    src: string;
    alt: string;
    rounded?: boolean;
    "rounded-top"?: boolean;
    "rounded-bottom"?: boolean;
}
declare const Image: React.FunctionComponent<Props>;
export default Image;
