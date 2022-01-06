import React from "react";
import { BasicComponentProps } from "../../typings/index";
export interface CardProps extends BasicComponentProps {
    rounded?: boolean;
}
declare const Card: React.FunctionComponent<CardProps>;
export default Card;
