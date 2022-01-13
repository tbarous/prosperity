import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

const Container = styled.div<StyledProps>`
  padding-right: ${p => px(p.theme.spacing.s5)};
  padding-left: ${p => px(p.theme.spacing.s5)};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  width: ${p => p.theme.dimension.d100};
`;

export default Container;