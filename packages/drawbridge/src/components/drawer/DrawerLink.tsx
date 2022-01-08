import React from "react";
import DrawerLinkStyled from "./styled/DrawerLinkStyled";
import {BasicComponentProps} from "@typings";

export interface DrawerLinkProps extends BasicComponentProps {
    light?: boolean,
    dark?: boolean
}

const DrawerLink: React.FunctionComponent<DrawerLinkProps> = (props: DrawerLinkProps): React.ReactElement => {
    const {
        children,
        className,
        light = false,
        dark = true
    } = props;

    return (
        <DrawerLinkStyled
            className={className}
            light={light}
            dark={dark}
        >
            {children}
        </DrawerLinkStyled>
    )
}

export default DrawerLink;