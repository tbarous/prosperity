import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const ListStyled = styled.ul<T>`
  margin: 0;
  box-shadow: ${(p: T) => p.theme.shadow.medium};
`;

export default ListStyled;