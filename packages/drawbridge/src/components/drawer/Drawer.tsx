import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import {useMountChildProps} from "@hooks/useMountChild";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerOverlay from "./styled/DrawerOverlay";
import DrawerContent from "./styled/DrawerContent";

export enum DrawerVariation {
    LIGHT = "light",
    DARK = "dark"
}

export interface DrawerProps extends BasicComponentProps, useMountChildProps {
    fixed?: boolean,
    light?: boolean,
    dark?: boolean,
    transparent?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElement => {
    const {
        children,
        className,
        fixed,
        light,
        dark,
        transparent
    } = props;

    const {mount, entryDelay, exitDelay} = props;

    return (
        <DrawerStyled
            className={className}
            mount={mount}
            fixed={fixed}
            entryDelay={entryDelay}
            exitDelay={exitDelay}
            light={light}
            dark={dark}
            transparent={transparent}
        >
            <DrawerContent>{children}</DrawerContent>

            {transparent && <DrawerOverlay
                light={light}
                dark={dark}
            />}
        </DrawerStyled>
    )
}

export default Drawer;