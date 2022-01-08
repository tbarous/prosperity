import React, {Children, cloneElement, isValidElement, ReactElement, ReactNode} from "react";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerOverlay from "./styled/DrawerOverlay";
import DrawerContent from "./styled/DrawerContent";

export enum DrawerVariations {
    LIGHT = "light",
    DARK = "dark"
}

export interface DrawerProps {
    children: ReactNode,
    className?: string,
    fixed?: boolean,
    light?: boolean,
    dark?: boolean,
    transparent?: boolean,
    mount?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElement => {
    const {
        children,
        className,
        fixed,
        light,
        dark,
        transparent,
        mount
    } = props;

    return (
        <DrawerStyled
            className={className}
            fixed={fixed}
            light={light}
            dark={dark}
            transparent={transparent}
            mount={mount}
        >
            <DrawerContent>
                {Children.map(children, child => isValidElement(child) && cloneElement(child, {light, dark}))}
            </DrawerContent>

            {transparent && <DrawerOverlay
                light={light}
                dark={dark}
            />}
        </DrawerStyled>
    )
}

export default Drawer;