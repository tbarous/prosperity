import styled from "styled-components";
import {StyledProps} from "@typings";

interface ListStyledProps extends StyledProps {}

type T = ListStyledProps;

const ListStyled = styled.ul<T>`
  margin: ${(p: T) => p.theme.spacing.s0};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
`;

export default ListStyled;