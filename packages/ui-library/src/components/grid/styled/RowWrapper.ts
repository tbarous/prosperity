import styled from "styled-components";
import Theme from "@theme/interfaces";
import {calculateMargin} from "@components/grid/utils/RowUtils";

interface Props {
    fluid?: boolean,
    theme: Theme,
    gutter?: number
}

const RowWrapper = styled.div<Props>`
  ${(props: Props) => calculateMargin(props.gutter)};

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export default RowWrapper;