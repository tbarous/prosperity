import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const ListItemStyled = styled.li<T>`
  margin: 0;
  padding: 1rem;
  list-style: none;
  border-bottom: ${(p:T) => p.theme.border.light}
`;

export default ListItemStyled;