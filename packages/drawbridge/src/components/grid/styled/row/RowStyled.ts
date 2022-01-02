import styled from "styled-components";
import {StyledProps} from "@typings";
import RowStyledGetters from "@components/grid/styled/row/RowStyledGetters";

export interface RowStyledProps extends StyledProps {
    fluid?: boolean,
    gutter?: number
}

const RowStyled = styled.div<RowStyledProps>`
  margin-left: ${RowStyledGetters.MarginLeft};
  margin-right: ${RowStyledGetters.MarginRight};
  height: ${RowStyledGetters.Height};
  box-sizing: ${RowStyledGetters.BoxSizing};
  display: ${RowStyledGetters.Display};
  flex-wrap: ${RowStyledGetters.FlexWrap};
`;

export default RowStyled;