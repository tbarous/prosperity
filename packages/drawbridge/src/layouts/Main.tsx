import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

export interface Props extends StyledProps {}

const Main = styled.div<Props>`
  padding: 1rem 3rem;
  flex: 1;
`;

export default Main;