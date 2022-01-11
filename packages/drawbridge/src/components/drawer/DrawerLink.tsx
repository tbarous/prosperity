import React, {FunctionComponent, ReactElement} from "react";
import DrawerLinkStyled from "./styled/DrawerLinkStyled";
import {BasicComponentProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import {IconInterface} from "@icons";
import Icon from "@components/icon/Icon";
import Link from "@components/link/Link";
import DrawerLinkIconStyled from "./styled/DrawerLinkIconStyled";
import DrawerLinkTextStyled from "./styled/DrawerLinkTextStyled";

export interface DrawerLinkProps extends BasicComponentProps, DrawerUIProps {
    icon?: IconInterface,
    text?: string,
    onClick?: () => void,
    href?: string
}

const DrawerLink: FunctionComponent<DrawerLinkProps> = (props: DrawerLinkProps): ReactElement => {
    const {children, className, light, dark, icon, onClick, href, text} = props;

    const UIProps = {dark, light};

    return (
        <DrawerLinkStyled className={className} {...UIProps}>
            {icon && <DrawerLinkIconStyled dark={dark} light={light} icon={icon}/>}

            {href && <Link href={href}>{text}</Link>}

            {onClick && <DrawerLinkTextStyled onClick={onClick}>{text}</DrawerLinkTextStyled>}

            {children}
        </DrawerLinkStyled>
    )
}

export default DrawerLink;