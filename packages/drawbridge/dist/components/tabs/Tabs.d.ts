import React from "react";
import { BasicComponentProps } from "../../typings/index";
export interface TabsProps extends BasicComponentProps {
    onChange: (index: number) => void;
    activate?: number;
    speed?: number;
}
declare const Tabs: React.FunctionComponent<TabsProps>;
export default Tabs;
