import React, {ReactNode} from "react";
import DividerStyled from "./styled/DividerStyled";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps{
    spacing?: number
}

const Divider: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className, spacing} = props;

    return (
        <DividerStyled className={className} spacing={spacing}>
            {children}
        </DividerStyled>
    )
}

export default Divider;