import {ModalFooterStyledProps} from "@components/modal/styled/ModalFooterStyled";

export const ModalFooterBoxShadow = (props: ModalFooterStyledProps) => props.theme.shadow.primary;
export const ModalFooterBorderBottomLeftRadius = (props: ModalFooterStyledProps) => props.theme.borderRadius.medium;
export const ModalFooterBorderBottomRightRadius = (props: ModalFooterStyledProps) => props.theme.borderRadius.medium;
export const ModalFooterFontSize = (props: ModalFooterStyledProps) => props.theme.fontSize.md;
export const ModalFooterPadding = (props: ModalFooterStyledProps) => `${props.theme.spacing.s3} ${props.theme.spacing.s5}`;
export const ModalFooterWidth = (props: ModalFooterStyledProps) => props.theme.dimension.d100;
export const ModalFooterPosition = (props: ModalFooterStyledProps) => props.theme.position.absolute;
export const ModalFooterHeight = (props: ModalFooterStyledProps) => props.theme.dimension.d20;
export const ModalFooterBoxSizing = (props: ModalFooterStyledProps) => props.theme.boxSizing.borderBox;