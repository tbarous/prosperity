import React, {FunctionComponent, ReactElement, useState} from "react";
import LinkStyled from "./styled/LinkStyled";
import {BasicComponentProps} from "@typings";
import LinkLineStyled from "./styled/LInkLineStyled";

export interface LinkProps extends BasicComponentProps {
    href: string,
    blank?: boolean,
    active?: boolean
}

const Link: FunctionComponent<LinkProps> = (props: LinkProps): ReactElement => {
    const {children, className, href, blank, active} = props;

    const [hovered, setHovered] = useState(false);

    const target = blank ? "_blank" : "";

    return (
        <LinkStyled
            className={className}
            href={href}
            target={target}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            active={active}
        >
            {children}

            <LinkLineStyled hovered={hovered} active={active}/>
        </LinkStyled>
    )
}

export default Link;