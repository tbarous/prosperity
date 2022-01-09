import React, {ReactElement} from "react";
import BadgeStyled from "@components/badge/styled/BadgeStyled";
import {BasicComponentProps} from "@typings";

interface BadgeProps extends BasicComponentProps {}

const Badge: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElement => {
    const {children, className} = props;

    return <BadgeStyled className={className}>{children}</BadgeStyled>;
}

export default Badge;