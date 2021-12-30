import styled from "styled-components";
import Theme from "@theme/interfaces";
import {calculateCols, calculateGutter} from "@components/grid/utils/ColUtils";

interface Props {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number,
    theme: Theme
}

const ColWrapper = styled.div<Props>`
  flex: 0 0 auto;
  //width: 100%;
  //max-width: 100%;
  //position: relative;
  display: block;
      -webkit-box-flex: 0;
  box-sizing: border-box;

  ${(props: Props) => calculateGutter(props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xs, props.xs, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.sm, props.sm, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.md, props.md, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.lg, props.lg, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xl, props.xl, props.gutter)};
  ${(props: Props) => calculateCols(props.theme.breakpoint.xxl, props.xxl, props.gutter)};
`;

export default ColWrapper;