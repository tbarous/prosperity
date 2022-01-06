import React from "react";
import { BasicComponentProps, FunctionVoid } from "../../typings/index";
interface Props extends BasicComponentProps {
    onChange?: FunctionVoid;
    checked?: boolean;
    label?: string;
}
declare const Checkbox: React.FunctionComponent<Props>;
export default Checkbox;
