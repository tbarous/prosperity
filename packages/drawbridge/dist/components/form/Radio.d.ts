import React from "react";
import { BasicComponentProps, FunctionVoid } from "../../typings/index";
interface Props extends BasicComponentProps {
    onChange?: FunctionVoid;
}
declare const Radio: React.FunctionComponent<Props>;
export default Radio;
