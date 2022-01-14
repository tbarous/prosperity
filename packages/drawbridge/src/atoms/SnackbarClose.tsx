import styled from "styled-components";
import Icon from "@atoms/Icon";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export interface SnackbarCloseStyledProps extends StyledProps {}

type T = SnackbarCloseStyledProps;

const SnackbarClose = styled(Icon)<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  right: ${(p: T) => px(p.theme.spacing.s5)};
  top: ${(p: T) => px(p.theme.spacing.s5)};
  color: ${p => p.theme.color.danger};
`;

export default SnackbarClose;