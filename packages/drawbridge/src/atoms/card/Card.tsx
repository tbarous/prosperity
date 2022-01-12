import React, {FunctionComponent, ReactElement} from "react";
import CardStyled from "@atoms/card/styled/CardStyled";
import {BasicComponentProps} from "@typings";

export interface CardUIProps {
    rounded?: boolean
}

interface CardProps extends BasicComponentProps, CardUIProps {}

const Card: FunctionComponent<CardProps> = (props: CardProps): ReactElement => {
    const {children, className, rounded} = props;

    const UIProps = {rounded};

    return <CardStyled {...UIProps} className={className}>{children}</CardStyled>;
}

export default Card;