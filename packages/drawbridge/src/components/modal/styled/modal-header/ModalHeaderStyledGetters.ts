import {ModalHeaderStyledProps} from "@components/modal/styled/modal-header/ModalHeaderStyled";

const ModalHeaderStyledGetters = {
    BorderTopRightRadius: (props: ModalHeaderStyledProps) => props.theme.borderRadius.medium,
    BorderTopLeftRadius: (props: ModalHeaderStyledProps) => props.theme.borderRadius.medium,
    BoxShadow: (props: ModalHeaderStyledProps) => props.theme.shadow.primary,
    FontSize: (props: ModalHeaderStyledProps) => props.theme.fontSize.lg,
    Width: (props: ModalHeaderStyledProps) => props.theme.dimension.d100,
    FontFamily: (props: ModalHeaderStyledProps) => props.theme.fontFamily.secondary,
    Height: (props: ModalHeaderStyledProps) => props.theme.dimension.d10,
    BoxSizing: (props: ModalHeaderStyledProps) => props.theme.boxSizing.borderBox,
}

export default ModalHeaderStyledGetters;