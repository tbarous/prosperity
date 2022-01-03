import styled from "styled-components";
import {StyledProps} from "@typings";
import DrawerStyledGetters from "@components/drawer/styled/drawer/DrawerStyledGetters";

export interface DrawerStyledProps extends StyledProps {
    unmounting?: boolean,
    overlay?: boolean
}

const DrawerStyled = styled.div<DrawerStyledProps>`
  position: ${DrawerStyledGetters.Position};
  height: ${DrawerStyledGetters.Height};
  background-color: ${DrawerStyledGetters.BackgroundColor};
  width: ${DrawerStyledGetters.Width};
  animation: ${DrawerStyledGetters.Animation};
`;

export default DrawerStyled;