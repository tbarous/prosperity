import React from "react";
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

const Alert = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  font-family: ${p => p.theme.fontFamily.primary};
  position: ${p => p.theme.position.fixed};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  left: ${p => p.theme.spacing.s0};
  width: ${p => p.theme.dimension.d100};
  font-weight: ${p => p.theme.fontWeight.bold};
  box-shadow: ${p => p.theme.shadow.medium};
  padding: ${p => `${p.theme.spacing.s0} ${px(p.theme.spacing.s6)}`};
  height: ${p => px(p.theme.dimension.snackbar.height)};
  color: ${p => p.theme.color.surface};
  background-color: ${p => p.theme.color.success};
`;

export default Alert;