import {ModalFooterStyledProps} from "@components/modal/styled/modal-footer/ModalFooterStyled";

const ModalFooterStyledGetters = {
    BoxShadow: (props: ModalFooterStyledProps) => props.theme.shadow.primary,
    BorderBottomLeftRadius: (props: ModalFooterStyledProps) => props.theme.borderRadius.medium,
    BorderBottomRightRadius: (props: ModalFooterStyledProps) => props.theme.borderRadius.medium,
    FontSize: (props: ModalFooterStyledProps) => props.theme.fontSize.md,
    Padding: (props: ModalFooterStyledProps) => `${props.theme.spacing.s3} ${props.theme.spacing.s5}`,
    Width: (props: ModalFooterStyledProps) => props.theme.dimension.d100,
    Position: (props: ModalFooterStyledProps) => props.theme.position.absolute,
    Height: (props: ModalFooterStyledProps) => props.theme.dimension.d20,
    BoxSizing: (props: ModalFooterStyledProps) => props.theme.boxSizing.borderBox,
    Bottom: (props: ModalFooterStyledProps) => props.theme.spacing.s0,
    OverflowY: (props: ModalFooterStyledProps) => props.theme.overflow.auto,
}

export default ModalFooterStyledGetters;