import React, {ReactElement, ReactNode} from "react";
import {FunctionComponent} from "react";
import NavbarFixedStyled from "@components/navbar/styled/NavbarFixedStyled";
import {BasicComponentProps} from "@typings";

export interface NavbarFixedProps extends BasicComponentProps {}

const NavbarFixed: FunctionComponent<NavbarFixedProps> = (props: NavbarFixedProps): ReactElement => {
    const {children, className} = props;

    return (
        <NavbarFixedStyled className={className}>
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;