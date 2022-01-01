import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import CardStyled from "@components/card/styled/CardStyled";

interface Props extends BasicComponentProps {
    rounded?: boolean
}

const Card: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children} = props;

    return (
        <CardStyled {...props}>
            {children}
        </CardStyled>
    )
}

export default Card;