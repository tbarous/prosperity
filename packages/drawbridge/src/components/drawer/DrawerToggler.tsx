import React, {ReactElement, ReactNode} from "react";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";

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

    return (
        <DrawerTogglerStyled
            className={className}
            light={light}
            dark={dark}
            onClick={toggle}
            unmount={unmount}
        >
            <DrawerTogglerIconStyled
                icon={unmount ? ArrowRight : ArrowLeft}
                width={18}
                height={18}
                light={light}
                dark={dark}
            />
        </DrawerTogglerStyled>
    )
}

export default DrawerToggler;