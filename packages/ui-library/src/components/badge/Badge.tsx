import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import BadgeStyled from "./styled/BadgeStyled";

interface Props extends BasicComponentProps{

}

const Badge: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <BadgeStyled className={className}>
            {children}
        </BadgeStyled>
    )
}

export default Badge;