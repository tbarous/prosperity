import React from "react";
import LinkStyled from "./styled/LinkStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

interface Props extends BasicComponentProps {
    href: string,
    blank?: boolean
}

const Link: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <LinkStyled {...props}>
            {children}
        </LinkStyled>
    )
}

export default Link;