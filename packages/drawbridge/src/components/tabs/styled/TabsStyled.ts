import styled from "styled-components";
import {StyledProps} from "@typings";
import TabsStyledGetters from "@components/tabs/styled/TabsStyledGetters";

export interface TabsStyledProps extends StyledProps {
}

const TabsStyled = styled.div<TabsStyledProps>`
  display: ${TabsStyledGetters.Display};
  width: ${TabsStyledGetters.Width};
  height: ${TabsStyledGetters.Height};
`;

export default TabsStyled;