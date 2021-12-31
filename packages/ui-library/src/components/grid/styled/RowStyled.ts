import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    RowBoxSizing,
    RowDisplay,
    RowHeight,
    RowMarginLeft,
    RowMarginRight
} from "@components/grid/styled/RowStyledGetters";

export interface RowStyledProps extends StyledProps {
    fluid?: boolean,
    gutter?: number
}

const RowStyled = styled.div<RowStyledProps>`
  margin-left: ${RowMarginLeft};
  margin-right: ${RowMarginRight};
  height: ${RowHeight};
  box-sizing: ${RowBoxSizing};
  display: ${RowDisplay};
  flex-wrap: wrap;
`;

export default RowStyled;