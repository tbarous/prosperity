import React, {ReactElement} from "react";
import {ArrowLeft, ArrowRight} from "@icons";
import DrawerTogglerStyled from "./styled/DrawerTogglerStyled";
import DrawerTogglerIconStyled from "./styled/DrawerTogglerIconStyled";
import {BasicComponentProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import useTransition from "@hooks/useTransition";
import {useTheme} from "styled-components";

export interface DrawerTogglerProps extends BasicComponentProps, DrawerUIProps {
    transition: boolean,
    onToggle: () => void
}

const DrawerToggler: React.FunctionComponent<DrawerTogglerProps> = (props: DrawerTogglerProps): ReactElement => {
    const {className, dark, light, transition, small, onToggle} = props;

    const UIProps = {light, dark, small};

    let icon = transition ? ArrowLeft : ArrowRight;

    if (small !== undefined) {
        icon = small ? ArrowRight : ArrowLeft
    }

    return (
        <DrawerTogglerStyled className={className} {...UIProps} onClick={onToggle} transition={transition}>
            <DrawerTogglerIconStyled icon={icon} {...UIProps}/>
        </DrawerTogglerStyled>
    )
}

export default DrawerToggler;