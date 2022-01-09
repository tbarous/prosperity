import React, {ReactElement, ReactNode} from "react";
import ColStyled from "@components/grid/styled/ColStyled";

export interface T {
    children?: ReactNode,
    className?: string,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

const Col: React.FunctionComponent<T> = (props: T): ReactElement => {
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