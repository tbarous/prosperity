import {css, keyframes} from "styled-components";
import {DrawerStyledProps} from "@components/drawer/styled/drawer/DrawerStyled";

const openDrawerAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const closeDrawerAnimation = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const DrawerStyledGetters = {
    Position:  (props: DrawerStyledProps) => props.theme.position.fixed,
    Animation: (props: DrawerStyledProps) => props.unmounting ? css`${closeDrawerAnimation} .8s` : css`${openDrawerAnimation} .8s`,
    Height: (props: DrawerStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: DrawerStyledProps) => props.theme.color.dark,
    Width: (props: DrawerStyledProps) => "15%"
}

export default DrawerStyledGetters;