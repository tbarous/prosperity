import styled from "styled-components";
import {StyledProps} from "@typings";
import TabActiveStyledGetters from "@components/tabs/styled/tab-active/TabActiveStyledGetters";

export interface TabActiveStyledProps extends StyledProps {
}

const TabActiveStyled = styled.div<TabActiveStyledProps>`
  height: ${TabActiveStyledGetters.Height};
  background-color: ${TabActiveStyledGetters.BackgroundColor};
  position: ${TabActiveStyledGetters.Position};
  bottom: ${TabActiveStyledGetters.Bottom};
  left: ${TabActiveStyledGetters.Left};
  width: ${TabActiveStyledGetters.Width};
`;

export default TabActiveStyled;