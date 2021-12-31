import {ModalCloseStyledProps} from "@components/modal/styled/ModalCloseStyled";

export const ModalClosePosition = (props: ModalCloseStyledProps) => props.theme.position.fixed;
export const ModalCloseCursor = (props: ModalCloseStyledProps) => props.theme.cursor.pointer;
export const ModalCloseBorderRadius = (props: ModalCloseStyledProps) => props.theme.borderRadius.rounded;
export const ModalCloseBackgroundColor = (props: ModalCloseStyledProps) => props.theme.color.dark;
export const ModalCloseColor = (props: ModalCloseStyledProps) => props.theme.color.white;
export const ModalClosePadding = (props: ModalCloseStyledProps) => props.theme.spacing.s2;
export const ModalCloseDisplay = (props: ModalCloseStyledProps) => props.theme.display.flex;