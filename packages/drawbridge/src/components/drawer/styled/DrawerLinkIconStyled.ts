import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import Icon from "@components/icon/Icon";

export interface DrawerLinkIconStyledProps extends StyledProps, DrawerUIProps {}

type T = DrawerLinkIconStyledProps;

function getHoveredColor(p: T) {
    if (p.dark) {
        return p.theme.color.surface;
    }

    if (p.light) {
        return p.theme.color.dark;
    }
}

const DrawerLinkIconStyled = styled(Icon)`
  width: ${(p: T) => px(p.theme.spacing.s6)};
  height: ${(p: T) => px(p.theme.spacing.s6)};
  //color: ${getHoveredColor};
`;

export default DrawerLinkIconStyled;