import React, {ReactElement, ReactNode} from "react";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";

interface T {
    children: ReactNode,
    className?: string,
    dark?: boolean,
    light?: boolean,
    toggle?: any,
    mount?: any
}

const DrawerToggler: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        className,
        dark,
        light,
        toggle,
        mount
    } = props;

    return (
        <DrawerTogglerStyled
            className={className}
            light={light}
            dark={dark}
            onClick={toggle}
            mount={mount}
        >
            <DrawerTogglerIconStyled
                icon={mount ? ArrowLeft : ArrowRight}
                width={18}
                height={18}
                light={light}
                dark={dark}
            />
        </DrawerTogglerStyled>
    )
}

export default DrawerToggler;