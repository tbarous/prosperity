import React, {ReactElement, ReactNode} from "react";
import BadgeStyled from "@components/badge/styled/BadgeStyled";

export interface BadgeProps {
    children: ReactNode,
    className?: string
}

const Badge: React.FunctionComponent<BadgeProps> = (props: BadgeProps): ReactElement => {
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