import React, {useEffect} from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import NavbarFixedStyled from "./styled/navbar-fixed/NavbarFixedStyled";
import useMount from "@hooks/useMount";
import {useMountChildProps} from "@hooks/useMountChild";

interface NavbarFixedProps extends BasicComponentProps, useMountChildProps {
}

const NavbarFixed: FunctionComponent<NavbarFixedProps> = (props: NavbarFixedProps): ReactElementOrNull => {
    const {
        children,
        className,
    } = props;

    const {unmountComponent, mount, entryDelay, exitDelay} = useMount(props);

    return (
        <NavbarFixedStyled
            className={className}
            mount={mount}
            entryDelay={entryDelay}
            exitDelay={exitDelay}
        >
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;