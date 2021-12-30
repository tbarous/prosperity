import React from "react";
import styled from "styled-components";
import Theme from "@theme/interfaces";
import {up} from "../../theme/utils/Breakpoint";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";

interface WrapperProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    theme: Theme
}

const calculateCols = (breakpoint: string, cols?: number) => {
    if (!cols) return;

    const colsCalculated = (100 / 12) * cols;

    return up(breakpoint, `
        flex: 0 0 ${colsCalculated}%;
        max-width: ${colsCalculated}%;
        -webkit-box-flex: 0;
    `)
}

const Wrapper = styled.div<WrapperProps>`
  flex: 0 0 ${(props: WrapperProps) => (100 / 12) * (props.xs || 12)}%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  ${(props: WrapperProps) => calculateCols(props.theme.breakpoint.sm, props.sm)};
  ${(props: WrapperProps) => calculateCols(props.theme.breakpoint.md, props.md)};
  ${(props: WrapperProps) => calculateCols(props.theme.breakpoint.lg, props.lg)};
  ${(props: WrapperProps) => calculateCols(props.theme.breakpoint.xl, props.xl)};
  ${(props: WrapperProps) => calculateCols(props.theme.breakpoint.xxl, props.xxl)};
`;

interface Props extends BasicComponentProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
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
        xxl
    } = props;

    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
}

export default Col;