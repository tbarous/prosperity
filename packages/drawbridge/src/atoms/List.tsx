import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

const List = styled.ul<StyledProps>`
  margin: ${p => p.theme.spacing.s0};
  box-shadow: ${p => p.theme.shadow.medium};
`;

export default List;