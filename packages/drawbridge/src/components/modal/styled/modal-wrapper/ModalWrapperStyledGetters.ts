import {ModalWrapperStyledProps} from "@components/modal/styled/modal-wrapper/ModalWrapperStyled";

const ModalWrapperStyledGetters = {
    Display: (props: ModalWrapperStyledProps) => props.theme.display.flex,
    AlignItems: (props: ModalWrapperStyledProps) => props.theme.alignItems.center,
    JustifyContent: (props: ModalWrapperStyledProps) => props.theme.justifyContent.center,
    Width: (props: ModalWrapperStyledProps) => props.theme.dimension.d100,
    Height: (props: ModalWrapperStyledProps) => props.theme.dimension.d100,
    Position: (props: ModalWrapperStyledProps) => props.theme.position.fixed,
    Top: (props: ModalWrapperStyledProps) => props.theme.spacing.s0,
    Left: (props: ModalWrapperStyledProps) => props.theme.spacing.s0,
}

export default ModalWrapperStyledGetters;
