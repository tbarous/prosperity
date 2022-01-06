import { FunctionComponent } from "react";
import { BasicComponentProps } from "../../typings/index";
import { useMountChildProps } from "../../hooks/useMountChild";
interface NavbarFixedProps extends BasicComponentProps, useMountChildProps {
}
declare const NavbarFixed: FunctionComponent<NavbarFixedProps>;
export default NavbarFixed;
