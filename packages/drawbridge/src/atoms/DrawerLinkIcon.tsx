import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@atoms/Icon";
import {px} from "@utils/ThemeUtils";

const DrawerLinkIcon = styled(Icon)<StyledProps>`
  width: ${p => px(p.theme.spacing.s6)};
  height: ${p => px(p.theme.spacing.s6)};
`;

export default DrawerLinkIcon;