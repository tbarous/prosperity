import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";

type T = StyledProps;

const SnackbarCloseStyled = styled(Icon)<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  right: ${(p: T) => px(p.theme.spacing.s5)};
  top: ${(p: T) => px(p.theme.spacing.s5)};
`;

export default SnackbarCloseStyled;