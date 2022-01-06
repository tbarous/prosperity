import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    href: string;
    blank?: boolean;
    active?: boolean;
}
declare const Link: React.FunctionComponent<Props>;
export default Link;
