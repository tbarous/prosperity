import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface TabStyledProps extends StyledProps {
    onClick?: any,
}

const TabStyled = styled.div<TabStyledProps>`
  flex: 1;
  text-align: ${rules.textAlign.center};
  cursor: ${rules.cursor.pointer};
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  position: ${rules.position.relative};
  justify-content: ${rules.justifyContent.center};
  background-color: ${(props: TabStyledProps) => props.theme.color.primary};
  color: ${(props: TabStyledProps) => props.theme.color.white};
  font-family: ${(props: TabStyledProps) => props.theme.fontFamily.primary};
  font-size: ${(props: TabStyledProps) => props.theme.fontSize.md};
`;

export default TabStyled;