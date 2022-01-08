import React, {ReactElement, ReactNode} from "react";
import BadgeStyled from "@components/badge/styled/BadgeStyled";

interface T {
    children?: ReactNode,
    className?: string
}

const Badge: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className
    } = props;

    return (
        <BadgeStyled
            className={className}
        >
            {children}
        </BadgeStyled>
    )
}

export default Badge;