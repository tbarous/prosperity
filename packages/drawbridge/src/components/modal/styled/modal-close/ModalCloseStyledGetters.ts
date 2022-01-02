import {ModalCloseStyledProps} from "@components/modal/styled/modal-close/ModalCloseStyled";

const ModalCloseStyledGetters = {
    Position: (props: ModalCloseStyledProps) => props.theme.position.fixed,
    Cursor: (props: ModalCloseStyledProps) => props.theme.cursor.pointer,
    BorderRadius: (props: ModalCloseStyledProps) => props.theme.borderRadius.circle,
    BackgroundColor: (props: ModalCloseStyledProps) => props.theme.color.dark,
    Color: (props: ModalCloseStyledProps) => props.theme.color.white,
    Padding: (props: ModalCloseStyledProps) => props.theme.spacing.s2,
    Display: (props: ModalCloseStyledProps) => props.theme.display.flex,
    Top: (props: ModalCloseStyledProps) => props.theme.spacing.s4,
    Right: (props: ModalCloseStyledProps) => props.theme.spacing.s4,
    AlignItems: (props: ModalCloseStyledProps) => props.theme.alignItems.center,
}

export default ModalCloseStyledGetters