import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

const Row = styled.div<StyledProps>`
  height: ${p => p.theme.dimension.auto};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  display: ${p => p.theme.display.flex};
  flex-wrap: ${p => p.theme.flexWrap.wrap};
  height: ${p => p.theme.dimension.d100};
`;

export default Row;