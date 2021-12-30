import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ColStyled from "./styled/ColStyled";

interface Props extends BasicComponentProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

const Col: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <ColStyled {...props}>
            {children}
        </ColStyled>
    )
}

export default Col;