import {ModalContentStyledProps} from "@components/modal/styled/modal-content/ModalContentStyled";
import {css, keyframes} from "styled-components";

const animationDuration: string = ".4s";

const openModalAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const closeModalAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const ModalContentStyledGetters = {
    BackgroundColor: (props: ModalContentStyledProps) => props.theme.color.white,
    BorderRadius: (props: ModalContentStyledProps) => props.theme.borderRadius.medium,
    BoxShadow: (props: ModalContentStyledProps) => props.theme.shadow.primary,
    Width: (props: ModalContentStyledProps) => props.theme.dimension.d100,
    Height: (props: ModalContentStyledProps) => props.theme.dimension.d80,
    WidthMd: (props: ModalContentStyledProps) => `500px`,
    Animation: (props: ModalContentStyledProps) => !props.unmounting ? css`${openModalAnimation} ${animationDuration}` : css`${closeModalAnimation} ${animationDuration}`,
    AnimationTimingFunction: (props: ModalContentStyledProps) => "ease-in-out",
    AnimationFillMode: (props: ModalContentStyledProps) => "forwards"
}

export default ModalContentStyledGetters;