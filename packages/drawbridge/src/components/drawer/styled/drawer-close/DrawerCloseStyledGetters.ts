import {DrawerCloseStyledProps} from "@components/drawer/styled/drawer-close/DrawerCloseStyled";

const DrawerStyledGetters = {
    Position: (props: DrawerCloseStyledProps) => props.theme.position.fixed,
}

export default DrawerStyledGetters