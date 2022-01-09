import React, {ReactElement} from "react";
import CardStyled from "@components/card/styled/CardStyled";
import {BasicComponentProps} from "@typings";

export interface CardUIProps {
    rounded?: boolean
}

interface CardProps extends BasicComponentProps, CardUIProps {}

const Card: React.FunctionComponent<CardProps> = (props: CardProps): ReactElement => {
    const {children, className, rounded} = props;

    const UIProps = {rounded};

    return <CardStyled {...UIProps} className={className}>{children}</CardStyled>;
}

export default Card;