import React, {FunctionComponent, ReactElement} from "react";
import BadgeStyled from "@atoms/badge/styled/BadgeStyled";
import {BasicComponentProps} from "@typings";

interface BadgeProps extends BasicComponentProps {}

const Badge: FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElement => {
    const {children, className} = props;

    return <BadgeStyled className={className}>{children}</BadgeStyled>;
}

export default Badge;