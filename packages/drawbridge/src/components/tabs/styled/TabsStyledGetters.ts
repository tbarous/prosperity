import {TabsStyledProps} from "@components/tabs/styled/TabsStyled";

const TabsStyledGetters = {
    Display: (props: TabsStyledProps) => props.theme.display.flex,
    Width: (props: TabsStyledProps) => props.theme.dimension.d100,
    Height: (props: TabsStyledProps) => props.theme.dimension.d100
}

export default TabsStyledGetters;