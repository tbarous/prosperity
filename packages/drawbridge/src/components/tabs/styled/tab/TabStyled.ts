import styled from "styled-components";
import {StyledProps} from "@typings";
import TabStyledGetters from "@components/tabs/styled/tab/TabStyledGetters";

export interface TabStyledProps extends StyledProps {
    active?: boolean,
    onClick?: any,
    id?: string
}

const TabStyled = styled.div<TabStyledProps>`
  background-color: ${TabStyledGetters.BackgroundColor};
  color: ${TabStyledGetters.Color};
  text-align: ${TabStyledGetters.TextAlign};
  cursor: ${TabStyledGetters.Cursor};
  display: ${TabStyledGetters.Display};
  align-items: ${TabStyledGetters.AlignItems};
  font-family: ${TabStyledGetters.FontFamily};
  font-size: ${TabStyledGetters.FontSize};
  position: ${TabStyledGetters.Position};
  justify-content: ${TabStyledGetters.JustifyContent};
  flex: ${TabStyledGetters.Flex};
`;

export default TabStyled;