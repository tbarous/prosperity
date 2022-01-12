import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

interface ListItemStyledProps extends StyledProps {}

type T = ListItemStyledProps;

const ListItemStyled = styled.li<T>`
  margin: ${(p: T) => p.theme.spacing.s0};
  padding: ${(p: T) => px(p.theme.spacing.s5)};
  border-bottom: ${(p: T) => p.theme.border.light};
  list-style: none;
`;

export default ListItemStyled;