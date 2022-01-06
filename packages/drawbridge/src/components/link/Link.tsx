import React, {useState} from "react";
import LinkStyled from "./styled/LinkStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import LinkLineStyled from "./styled/LInkLineStyled";

interface Props extends BasicComponentProps {
    href: string,
    blank?: boolean,
    active?: boolean
}

const Link: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        href,
        blank,
        active
    } = props;

    const [hovered, setHovered] = useState(false);

    return (
        <LinkStyled
            className={className}
            href={href}
            target={blank ? "blank" : ""}
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