import React, {ReactElement, ReactNode} from "react";
import CardStyled from "@components/card/styled/CardStyled";

interface T {
    children?: ReactNode,
    className?: string,
    rounded?: boolean
}

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