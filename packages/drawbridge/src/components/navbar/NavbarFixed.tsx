import React, {useEffect} from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnScroll from "@hooks/UseOnScroll";
import NavbarFixedStyled from "./styled/navbar-fixed/NavbarFixedStyled";
import useMount, {useMountProps} from "@hooks/useMount";
import {emptyFunction} from "../../helpers/Helpers";

interface NavbarFixedProps extends BasicComponentProps, useMountProps {
}

const NavbarFixed: FunctionComponent<NavbarFixedProps> = (props: NavbarFixedProps): ReactElementOrNull => {
    const {
        children,
        className,
        mount,
        delay,
        unmountComponent = emptyFunction,
        onMounted = emptyFunction,
        onUnmounted = emptyFunction
    } = props;

    useMount({delay, mount, onMounted, onUnmounted});

    return (
        <NavbarFixedStyled
            className={className}
            mount={mount}
        >
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;