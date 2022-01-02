import styled from "styled-components";
import {StyledProps} from "@typings";
import TabActiveStyledGetters from "@components/tabs/styled/tab-active/TabActiveStyledGetters";

export interface TabActiveStyledProps extends StyledProps {
    width?: number,
    left?: number
}

const TabActiveStyled = styled.div<TabActiveStyledProps>`
  height: ${TabActiveStyledGetters.Height};
  background-color: ${TabActiveStyledGetters.BackgroundColor};
  position: ${TabActiveStyledGetters.Position};
  bottom: ${TabActiveStyledGetters.Bottom};
  left: ${TabActiveStyledGetters.Left};
  width: ${TabActiveStyledGetters.Width};
  transform: ${TabActiveStyledGetters.Transform};
  transition: ${TabActiveStyledGetters.Transition};
`;

export default TabActiveStyled;