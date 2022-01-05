import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";

type T = StyledProps;

const DrawerCloseStyled = styled(Icon)<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  top: ${(p: T) => px(p.theme.spacing.s6)};
  right: ${(p: T) => px(p.theme.spacing.s6)};
`;

export default DrawerCloseStyled;