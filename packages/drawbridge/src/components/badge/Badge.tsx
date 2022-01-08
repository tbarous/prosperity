import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import BadgeStyled from "./styled/BadgeStyled";

export interface BadgeProps extends BasicComponentProps {
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