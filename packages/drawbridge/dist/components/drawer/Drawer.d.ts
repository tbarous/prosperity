import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { useMountChildProps } from "../../hooks/useMountChild";
export interface DrawerProps extends BasicComponentProps, useMountChildProps {
    overlay?: boolean;
}
declare const Drawer: React.FunctionComponent<DrawerProps>;
export default Drawer;
