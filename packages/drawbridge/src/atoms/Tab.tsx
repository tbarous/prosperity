import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

export interface Props extends StyledProps {
    onClick?: any
}

const Tab = styled.div<Props>`
  flex: ${p => 1};
  text-align: ${p => p.theme.textAlign.center};
  cursor: ${p => p.theme.cursor.pointer};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  position: ${p => p.theme.position.relative};
  justify-content: ${p => p.theme.justifyContent.center};
  background-color: ${p => p.theme.color.primary};
  color: ${p => p.theme.color.surface};
  font-family: ${p => p.theme.fontFamily.primary};
  font-size: ${p => p.theme.fontSize.fs3};
`;

export default Tab;