import {ModalBodyStyledProps} from "@components/modal/styled/modal-body/ModalBodyStyled";

const ModalBodyStyledGetters = {
    FontSize: (props: ModalBodyStyledProps) => props.theme.fontSize.md,
    Width: (props: ModalBodyStyledProps) => props.theme.dimension.d100,
    Height: (props: ModalBodyStyledProps) => props.theme.dimension.d70,
    BoxSizing: (props: ModalBodyStyledProps) => props.theme.boxSizing.borderBox,
    OverflowY: (props: ModalBodyStyledProps) => props.theme.overflow.auto
}

export default ModalBodyStyledGetters;