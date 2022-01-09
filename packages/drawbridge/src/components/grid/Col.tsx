import React, {FunctionComponent, ReactElement} from "react";
import ColStyled from "@components/grid/styled/ColStyled";
import {BasicComponentProps} from "@typings";

export interface ColUIProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

export interface ColProps extends BasicComponentProps, ColUIProps {}

const Col: FunctionComponent<ColProps> = (props: ColProps): ReactElement => {
    const {children, className, xs, sm, md, lg, xl, xxl, gutter} = props;

    return (
        <ColStyled className={className} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} gutter={gutter}>
            {children}
        </ColStyled>
    )
}

export default Col;