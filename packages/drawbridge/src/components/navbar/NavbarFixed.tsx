import React, {ReactElement, ReactNode} from "react";
import {FunctionComponent} from "react";
import NavbarFixedStyled from "@components/navbar/styled/NavbarFixedStyled";
import useUnmount from "@hooks/useUnmount";
import {useTheme} from "styled-components";

interface T {
    children: ReactNode,
    className?: string,
    unmount: boolean,
    onUnmounted: () => void,
}

const NavbarFixed: FunctionComponent<T> = (props: T): ReactElement => {
    const {children, className, unmount, onUnmounted,} = props;

    console.log(unmount)

    const theme = useTheme();

    const {myUnmount} = useUnmount(unmount, onUnmounted, theme.animation.navbar);

    return (
        <NavbarFixedStyled className={className} unmount={myUnmount}>
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;