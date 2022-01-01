import {ModalContentStyledProps} from "@components/modal/styled/ModalContentStyled";

export const ModalContentBackgroundColor = (props: ModalContentStyledProps) => props.theme.color.white;
export const ModalContentBorderRadius = (props: ModalContentStyledProps) => props.theme.borderRadius.medium;
export const ModalContentBoxShadow = (props: ModalContentStyledProps) => props.theme.shadow.primary;
export const ModalContentWidth = (props: ModalContentStyledProps) => props.theme.dimension.d100;
export const ModalContentHeight = (props: ModalContentStyledProps) => props.theme.dimension.d80;
export const ModalContentWidthMd =  (props: ModalContentStyledProps) => `500px`;