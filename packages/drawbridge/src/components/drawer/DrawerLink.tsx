import React, {ReactElement, ReactNode} from "react";
import DrawerLinkStyled from "./styled/DrawerLinkStyled";
import {BasicComponentProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

export interface DrawerLinkProps extends BasicComponentProps, DrawerUIProps {}

const DrawerLink: React.FunctionComponent<DrawerLinkProps> = (props: DrawerLinkProps): ReactElement => {
    const {children, className, light, dark} = props;

    const UIProps = {dark, light};

    return (
        <DrawerLinkStyled className={className} {...UIProps}>
            {children}
        </DrawerLinkStyled>
    )
}

export default DrawerLink;