import React from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import NavbarFixedStyled from "@components/navbar/styled/NavbarFixedStyled";
import {useMountChildProps} from "@hooks/useMountChild";

interface NavbarFixedProps extends BasicComponentProps, useMountChildProps {
}

const NavbarFixed: FunctionComponent<NavbarFixedProps> = (props: NavbarFixedProps): ReactElementOrNull => {
    const {
        children,
        className,
        unmountComponent,
        mount,
        exitDelay
    } = props;

    return (
        <NavbarFixedStyled
            className={className}
            mount={mount}
            exitDelay={exitDelay}
        >
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;