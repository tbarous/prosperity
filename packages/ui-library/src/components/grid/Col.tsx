import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ColWrapper from "./styled/ColWrapper";

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
        <ColWrapper {...props}>
            {children}
        </ColWrapper>
    )
}

export default Col;