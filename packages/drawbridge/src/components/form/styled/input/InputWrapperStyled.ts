import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & { focused?: boolean };

const InputStyledWrapper = styled.div<T>`
  height: ${(p: T) => px(p.theme.spacing.s10)};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  position: ${(p: T) => p.theme.position.relative};
  border-bottom: ${(p: T) => p.theme.border.light};
  border-color: ${(p: T) => p.theme.color.light};
`;

export default InputStyledWrapper;