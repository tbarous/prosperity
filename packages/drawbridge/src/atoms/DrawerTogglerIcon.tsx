import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import Icon from "@atoms/Icon";

const DrawerTogglerIcon = styled(Icon)<StyledProps>`
  color: ${p => p.theme.color.dark};
  width: ${p => px(p.theme.dimension.drawer.toggler.icon)};
  height: ${p => px(p.theme.dimension.drawer.toggler.icon)};
`;

export default DrawerTogglerIcon;