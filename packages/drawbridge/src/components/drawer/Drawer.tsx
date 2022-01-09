import React, {Children, FunctionComponent, useEffect} from "react";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerOverlay from "./styled/DrawerOverlay";
import DrawerContent from "./styled/DrawerContent";
import {clone} from "@utils/ComponentUtils";
import {useTheme} from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useTransition from "@hooks/useTransition";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";

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
    onStartDisplay: () => void,
    onStopDisplay: () => void
}

const Drawer: FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {children, className, fixed, light, dark, transparent, display, onStartDisplay, onStopDisplay, small} = props;

    const UIProps = {fixed, light, dark, transparent};

    const {transition, toggle} = useTransition(useTheme().animation.drawer, onStopDisplay, onStartDisplay);

    let icon = transition ? ArrowLeft : ArrowRight;
    if (small !== undefined) icon = small ? ArrowRight : ArrowLeft;

    return (
        <>
            {display && (
                <DrawerStyled className={className} transition={transition} {...UIProps}>
                    <DrawerContent>{Children.map(children, child => clone(child, {light, dark}))}</DrawerContent>

                    {transparent && <DrawerOverlay {...UIProps} />}
                </DrawerStyled>
            )}

            <DrawerTogglerStyled {...UIProps} onClick={toggle} transition={transition}>
                <DrawerTogglerIconStyled icon={icon} {...UIProps}/>
            </DrawerTogglerStyled>
        </>
    )
}

export default Drawer;