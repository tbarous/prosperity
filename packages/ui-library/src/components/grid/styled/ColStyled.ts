import styled from "styled-components";
import {calculateCols, calculateGutter} from "@components/grid/utils/ColUtils";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

const ColStyled = styled.div<Props>`
  //flex: 0 0 auto;
  //width: 100%;
  //max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;

  ${(props: Props) => calculateGutter(props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xs, props.xs, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.sm, props.sm, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.md, props.md, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.lg, props.lg, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xl, props.xl, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xxl, props.xxl, props.gutter)};
`;

export default ColStyled;