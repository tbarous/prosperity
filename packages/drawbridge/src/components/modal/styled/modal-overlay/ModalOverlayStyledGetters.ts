import {ModalOverlayStyledProps} from "@components/modal/styled/modal-overlay/ModalOverlayStyled";

const ModalOverlayStyledGetters = {
    BackgroundColor: (props: ModalOverlayStyledProps) => props.theme.color.dark,
    Display: (props: ModalOverlayStyledProps) => props.theme.display.flex,
    Position: (props: ModalOverlayStyledProps) => props.theme.position.fixed,
    Width: (props: ModalOverlayStyledProps) => props.theme.dimension.d100,
    Height: (props: ModalOverlayStyledProps) => props.theme.dimension.d100,
    Left: (props: ModalOverlayStyledProps) => props.theme.spacing.s0,
    Top: (props: ModalOverlayStyledProps) => props.theme.spacing.s0,
    AlignItems: (props: ModalOverlayStyledProps) => props.theme.alignItems.center,
    JustifyContent: (props: ModalOverlayStyledProps) => "center",
    Opacity: (props: ModalOverlayStyledProps) => props.mount ? 0.8 : 0,
    Transition: (props: ModalOverlayStyledProps) => props.mount ? `opacity ${props.entryDelay / 1000}s` : `opacity ${props.exitDelay / 1000}s`,
}

export default ModalOverlayStyledGetters;