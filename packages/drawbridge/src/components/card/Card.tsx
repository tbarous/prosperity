import React, {ReactElement} from "react";
import CardStyled from "@components/card/styled/CardStyled";
import T from "@components/card/CardProps";

const Card: React.FunctionComponent<T> = (props: T): ReactElement => {
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