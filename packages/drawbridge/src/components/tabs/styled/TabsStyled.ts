import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface TabsStyledProps extends StyledProps {
}

const TabsStyled = styled.div<TabsStyledProps>`
  display: ${rules.display.flex};
  width: ${(props: TabsStyledProps) => props.theme.dimension.d100};
  height: ${(props: TabsStyledProps) => props.theme.dimension.d100};
`;

export default TabsStyled;