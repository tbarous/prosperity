import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    clickable?: boolean;
}
declare const Tooltip: React.FunctionComponent<Props>;
export default Tooltip;
