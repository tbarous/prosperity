import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const SnackbarCloseStyled = styled(Icon)<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  right: ${(p: T) => px(p.theme.spacing.s5)};
  top: ${(p: T) => px(p.theme.spacing.s5)};
`;

export default SnackbarCloseStyled;