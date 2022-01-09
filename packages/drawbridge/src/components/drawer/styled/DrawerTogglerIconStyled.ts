import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

interface DrawerTogglerIconProps extends StyledProps, DrawerUIProps {}

type T = DrawerTogglerIconProps;

function getColor(p: T) {
    if (p.light) {
        return p.theme.color.dark;
    }

    if (p.dark) {
        return p.theme.color.light;
    }
}

const DrawerTogglerIconStyled = styled(Icon)<T>`
  color: ${getColor};
  width: ${(p: T) => p.theme.dimension.drawer.toggler.icon};
  height: ${(p: T) => p.theme.dimension.drawer.toggler.icon};
`;

export default DrawerTogglerIconStyled;