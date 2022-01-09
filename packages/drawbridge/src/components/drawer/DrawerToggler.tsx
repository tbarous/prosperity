import React, {ReactElement, ReactNode} from "react";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";
import useUnmount from "@hooks/useUnmount";
import {useTheme} from "styled-components";

interface T {
    className?: string,
    dark?: boolean,
    light?: boolean,
    toggle?: any,
    unmount: any
}

const DrawerToggler: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        className,
        dark,
        light,
        toggle,
        unmount
    } = props;

    const theme = useTheme();
    const {myUnmount} = useUnmount(unmount, () => {}, theme.animation.drawer);

    return (
        <DrawerTogglerStyled
            className={className}
            light={light}
            dark={dark}
            onClick={toggle}
            unmount={myUnmount}
        >
            <DrawerTogglerIconStyled
                icon={unmount ? ArrowRight : ArrowLeft}
                width={theme.dimension.drawer.toggler.icon}
                height={theme.dimension.drawer.toggler.icon}
                light={light}
                dark={dark}
            />
        </DrawerTogglerStyled>
    )
}

export default DrawerToggler;