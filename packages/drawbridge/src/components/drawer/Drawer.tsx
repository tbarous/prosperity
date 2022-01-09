import React, {Children, FunctionComponent} from "react";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerOverlay from "./styled/DrawerOverlay";
import DrawerContent from "./styled/DrawerContent";
import {clone} from "@utils/ComponentUtils";
import {useTheme} from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useTransition from "@hooks/useTransition";
import DrawerToggler from "@components/drawer/DrawerToggler";

export enum DrawerVariations {
    LIGHT = "light",
    DARK = "dark"
}

export interface DrawerUIProps {
    fixed?: boolean,
    light?: boolean,
    dark?: boolean,
    transparent?: boolean,
    small?: boolean,
}

export interface DrawerProps extends BasicComponentProps, DrawerUIProps {
    display?: boolean,
    onToggle: () => void,
    onStopDisplay: () => void
}

const Drawer: FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {children, className, fixed, light, dark, transparent, display, onToggle, onStopDisplay, small} = props;

    const UIProps = {fixed, light, dark, transparent};

    const {transition} = useTransition(useTheme().animation.drawer, onStopDisplay);

    return (
        <>
            {display && (
                <DrawerStyled className={className} transition={transition} {...UIProps}>
                    <DrawerContent>{Children.map(children, child => clone(child, {light, dark}))}</DrawerContent>

                    {transparent && <DrawerOverlay {...UIProps} />}
                </DrawerStyled>
            )}

            <DrawerToggler onToggle={onToggle} {...UIProps} transition={transition}/>
        </>
    )
}

export default Drawer;