import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

const ListItem = styled.li<StyledProps>`
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => px(p.theme.spacing.s5)};
  border-bottom: ${p => p.theme.border.light};
  list-style: none;
  font-family: ${p => p.theme.fontFamily.primary};
`;

export default ListItem;