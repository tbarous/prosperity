import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ColStyled from "@components/grid/styled/ColStyled";

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
    const {
        children,
        className,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        gutter
    } = props;

    return (
        <ColStyled
            className={className}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            gutter={gutter}
        >
            {children}
        </ColStyled>
    )
}

export default Col;