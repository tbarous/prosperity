import styled from "styled-components";
import {calculateMargin} from "@components/grid/utils/RowUtils";
import {StyledProps} from "@typings";

interface Props extends StyledProps{
    fluid?: boolean,
    gutter?: number
}

const RowStyled = styled.div<Props>`
  ${(props: Props) => calculateMargin(props.gutter)};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export default RowStyled;