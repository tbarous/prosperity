import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

const Textarea = styled.textarea<StyledProps>`
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs3)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.primary};
`;

export default Textarea;