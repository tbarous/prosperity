import React, {ReactNode} from "react";
import DrawerLinkStyled from "./styled/DrawerLinkStyled";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps {
    light?: boolean,
    dark?: boolean
}

const DrawerLink: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className, light, dark} = props;

    return (
        <DrawerLinkStyled light={light} dark={dark} className={className}>
            {children}
        </DrawerLinkStyled>
    )
}

export default DrawerLink;