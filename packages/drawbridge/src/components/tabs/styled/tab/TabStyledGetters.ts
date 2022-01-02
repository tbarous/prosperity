import {TabStyledProps} from "@components/tabs/styled/tab/TabStyled";

const TabStyledGetters = {
    BackgroundColor: (props: TabStyledProps) => props.theme.color.primary,
    Color: (props: TabStyledProps) => props.theme.color.white,
    Cursor: (props: TabStyledProps) => props.theme.cursor.pointer,
    TextAlign: (props: TabStyledProps) => props.theme.textAlign.center,
    Display: (props: TabStyledProps) => props.theme.display.flex,
    AlignItems: (props: TabStyledProps) => props.theme.alignItems.center,
    FontFamily: (props: TabStyledProps) => props.theme.fontFamily.primary,
    FontSize: (props: TabStyledProps) => props.theme.fontSize.md,
    Position: (props: TabStyledProps) => props.theme.position.relative,
    JustifyContent: (props: TabStyledProps) => props.theme.justifyContent.center,
    Flex: (props: TabStyledProps) => 1
}

export default TabStyledGetters;