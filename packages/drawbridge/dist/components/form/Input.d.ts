import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    label?: string;
    focused?: boolean;
    value?: string;
}
declare const Input: React.FunctionComponent<Props>;
export default Input;
