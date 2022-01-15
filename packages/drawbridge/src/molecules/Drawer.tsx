import React, {Children, FunctionComponent, useEffect} from "react";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import {clone} from "@utils/ComponentUtils";
import {useTheme} from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useTransition, {useTransitionProps} from "@hooks/useTransition";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerContentStyled from "./styled/content/DrawerContentStyled";
import DrawerPageOverlayStyled from "./styled/overlay/DrawerPageOverlayStyled";
import DrawerOverlayStyled from "./styled/overlay/DrawerOverlayStyled";
import DrawerTogglerStyled from "./styled/toggler/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/toggler/DrawerTogglerIconStyled";

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

export interface DrawerProps extends BasicComponentProps, DrawerUIProps, useTransitionProps {
    toggler?: boolean,
    overlay?: boolean
}

const Drawer: FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {
        children,
        className,
        fixed,
        light,
        dark,
        transparent,
        display,
        small,
        toggler,
        overlay,
        onStartDisplay,
        onStopDisplay,
    } = props;

    const UIProps = {fixed, light, dark, transparent};

    const {transition, toggle} = useTransition(useTheme().animation.drawer, onStopDisplay, onStartDisplay);

    const togglerIcon = (transition || small) ? ArrowLeft : ArrowRight;

    return (
        <>
            {display && (
                <>
                    <DrawerStyled className={className} transition={transition} {...UIProps}>
                        <DrawerContentStyled>
                            {Children.map(children, child => clone(child, {light, dark}))}
                        </DrawerContentStyled>

                        {transparent && <DrawerOverlayStyled {...UIProps} />}
                    </DrawerStyled>

                    {overlay && <DrawerPageOverlayStyled transition={transition}/>}
                </>
            )}

            {toggler &&
                <DrawerTogglerStyled {...UIProps} onClick={toggle} transition={transition}>
                    <DrawerTogglerIconStyled icon={togglerIcon} {...UIProps}/>
                </DrawerTogglerStyled>
            }
        </>
    )
}

export default Drawer;