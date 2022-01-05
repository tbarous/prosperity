import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import BadgeStyled from "./styled/BadgeStyled";

interface Props extends BasicComponentProps {
}

const Badge: React.FunctionComponent<Props> = (props: Props): ReactElement => {
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