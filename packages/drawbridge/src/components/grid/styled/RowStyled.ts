import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface RowStyledProps extends StyledProps {
    fluid?: boolean,
    gutter?: number
}

const margin = (props: RowStyledProps) => `-${!props.gutter ? 15 : (props.gutter * .5) + 15}px`

const RowStyled = styled.div<RowStyledProps>`
  margin-left: ${margin};
  margin-right: ${margin};
  height: auto;
  box-sizing: ${rules.boxSizing.borderBox};
  display: ${rules.display.flex};
  flex-wrap: ${rules.flexWrap.wrap};
`;

export default RowStyled;