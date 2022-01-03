import styled from "styled-components";
import {StyledProps} from "@typings";
import DrawerStyledGetters from "@components/drawer/styled/drawer/DrawerStyledGetters";

export interface DrawerStyledProps extends StyledProps {
    mount?: boolean,
    overlay?: boolean,
    delay?: number
}

const DrawerStyled = styled.div<DrawerStyledProps>`
  position: ${DrawerStyledGetters.Position};
  height: ${DrawerStyledGetters.Height};
  background-color: ${DrawerStyledGetters.BackgroundColor};
  width: ${DrawerStyledGetters.Width};
  display: ${DrawerStyledGetters.Display};
  transform: ${DrawerStyledGetters.Transform};
  transition: ${DrawerStyledGetters.Transition};
`;

export default DrawerStyled;