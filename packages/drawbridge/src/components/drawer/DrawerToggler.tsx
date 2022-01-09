import React, {ReactElement} from "react";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";
import {useTheme} from "styled-components";
import {BasicComponentProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import useTransition from "@hooks/useTransition";

export interface DrawerTogglerProps extends BasicComponentProps, DrawerUIProps {
    display: boolean,
    onToggle: () => void
}

const DrawerToggler: React.FunctionComponent<DrawerTogglerProps> = (props: DrawerTogglerProps): ReactElement => {
    const {className, dark, light, display, small, onToggle} = props;

    const UIProps = {light, dark, small};

    let icon = display ? ArrowRight : ArrowLeft;

    if (small !== undefined) icon = small ? ArrowRight : ArrowLeft

    return (
        <DrawerTogglerStyled className={className} {...UIProps} onClick={onToggle} display={display}>
            <DrawerTogglerIconStyled icon={icon} {...UIProps}/>
        </DrawerTogglerStyled>
    )
}

export default DrawerToggler;