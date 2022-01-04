import {ModalContentStyledProps} from "@components/modal/styled/modal-content/ModalContentStyled";

const ModalContentStyledGetters = {
    BackgroundColor: (props: ModalContentStyledProps) => props.theme.color.white,
    BorderRadius: (props: ModalContentStyledProps) => props.theme.borderRadius.medium,
    BoxShadow: (props: ModalContentStyledProps) => props.theme.shadow.primary,
    Width: (props: ModalContentStyledProps) => props.theme.dimension.d100,
    Height: (props: ModalContentStyledProps) => props.theme.dimension.d80,
    WidthMd: (props: ModalContentStyledProps) => `500px`,
    Transform: (props: ModalContentStyledProps) => props.mount ? `translateY(0)` : `translateY(-130%)`,
    Transition: (props: ModalContentStyledProps) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`,
}

export default ModalContentStyledGetters;