import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { IconInterface } from "../../icons/index";
export interface Props extends BasicComponentProps {
    icon: IconInterface;
    width?: number;
    height?: number;
    onClick?: () => void;
}
declare const Icon: React.FunctionComponent<Props>;
export default Icon;
