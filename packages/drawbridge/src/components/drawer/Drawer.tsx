import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import {useMountChildProps} from "@hooks/useMountChild";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";

export enum DrawerVariation {
    LIGHT = "light",
    DARK = "dark"
}

export interface DrawerProps extends BasicComponentProps, useMountChildProps {
    overlay?: boolean,
    light?: boolean,
    dark?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElement => {
    const {
        children,
        className,
        overlay,
        light,
        dark,
    } = props;

    const {mount, entryDelay, exitDelay} = props;

    return (
        <DrawerStyled
            className={className}
            mount={mount}
            overlay={overlay}
            entryDelay={entryDelay}
            exitDelay={exitDelay}
            light={light}
            dark={dark}
        >
            {children}
        </DrawerStyled>
    )
}

export default Drawer;