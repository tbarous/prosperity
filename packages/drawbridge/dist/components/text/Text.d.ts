import React from "react";
import { BasicComponentProps } from "../../typings/index";
export interface TextProps extends BasicComponentProps {
    bold?: boolean;
}
declare const Text: React.FunctionComponent<TextProps>;
export default Text;
