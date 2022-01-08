import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import CardStyled from "@components/card/styled/CardStyled";

export interface CardProps extends BasicComponentProps {
    rounded?: boolean
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps): ReactElement => {
    const {
        children,
        className,
        rounded
    } = props;

    return (
        <CardStyled
            rounded={rounded}
            className={className}
        >
            {children}
        </CardStyled>
    )
}

export default Card;