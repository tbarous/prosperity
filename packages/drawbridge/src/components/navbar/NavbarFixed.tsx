import React, {ReactElement, ReactNode, useEffect} from "react";
import {FunctionComponent} from "react";
import NavbarFixedStyled from "@components/navbar/styled/NavbarFixedStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useTransition, {useTransitionProps} from "@hooks/useTransition";
import {useTheme} from "styled-components";
import useOnScroll from "@hooks/UseOnScroll";

export interface NavbarFixedProps extends BasicComponentProps, useTransitionProps {
    toggleOnHeight?: number
}

const NavbarFixed: FunctionComponent<NavbarFixedProps> = (props: NavbarFixedProps): ReactElementOrNull => {
    const {children, className, display, onStopDisplay, onStartDisplay} = props;

    const {
        transition,
        toggle,
        remove,
        insert
    } = useTransition(useTheme().animation.drawer, onStopDisplay, onStartDisplay);

    const scrollFromTop = useOnScroll();
    const theme = useTheme();

    useEffect(() => {
        if (scrollFromTop > theme.dimension.navbar.height) {
            remove()
        } else {
            insert();
        }
    }, [scrollFromTop])

    if (!display) return null;

    return (
        <NavbarFixedStyled transition={transition} className={className}>
            {children}
        </NavbarFixedStyled>
    )
}

export default NavbarFixed;