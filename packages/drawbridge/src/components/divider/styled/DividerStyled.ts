import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { spacing?: number };

const DividerStyled = styled.div<T>`
  height: 1px;
  width: 100%;
  background: lightgray;
  margin: ${p => p.spacing}px 0;
`;

export default DividerStyled;