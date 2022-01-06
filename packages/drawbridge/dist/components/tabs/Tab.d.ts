import React from "react";
import { BasicComponentProps } from "../../typings/index";
interface Props extends BasicComponentProps {
    onClickTab?: (e: MouseEvent) => void;
}
declare const Tab: React.FunctionComponent<Props>;
export default Tab;
