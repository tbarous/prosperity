import React, {Children, ReactElement, ReactNode} from "react";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerOverlay from "./styled/DrawerOverlay";
import DrawerContent from "./styled/DrawerContent";
import {clone} from "@utils/ComponentUtils";
import useUnmount from "@hooks/useUnmount";
import {useTheme} from "styled-components";

export enum DrawerVariations {
    LIGHT = "light",
    DARK = "dark"
}

interface T {
    children: ReactNode,
    className?: string,
    fixed?: boolean,
    light?: boolean,
    dark?: boolean,
    transparent?: boolean,
    unmount: boolean,
    onUnmounted: () => void
}

const Drawer: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        fixed,
        light,
        dark,
        transparent,
        unmount,
        onUnmounted
    } = props;

    const delay = useTheme().animation.drawer;

    const {startUnmount, myUnmount} = useUnmount(unmount, onUnmounted, delay);

    return (
        <DrawerStyled
            className={className}
            fixed={fixed}
            light={light}
            dark={dark}
            transparent={transparent}
            unmount={myUnmount}
        >
            <DrawerContent>
                {Children.map(children, child => clone(child, {light, dark}))}
            </DrawerContent>

            {transparent && <DrawerOverlay
                light={light}
                dark={dark}
            />}
        </DrawerStyled>
    )
}

export default Drawer;