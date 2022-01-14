import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

export interface Props extends StyledProps {}

const App = styled.div<Props>`
  display: ${(p: Props) => p.theme.display.flex};
  height: ${(p: Props) => p.theme.dimension.d100};
`;

export default App;