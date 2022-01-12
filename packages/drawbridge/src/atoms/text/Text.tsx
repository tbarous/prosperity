import styled from "styled-components";
import {StyledProps} from "@typings";

export interface TextProps extends StyledProps {}

const Text = styled.p<TextProps>`
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSize.md};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.primary};
`;

export default Text;