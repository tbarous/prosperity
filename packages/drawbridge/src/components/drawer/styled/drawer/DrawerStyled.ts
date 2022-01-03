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
  transform: ${props => props.mount ? `translateX(0)` : `translateX(-100%)`};
  transition: transform ${props => props.delay/1000}s;
`;

export default DrawerStyled;