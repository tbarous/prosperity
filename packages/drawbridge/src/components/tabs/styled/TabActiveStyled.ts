import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface TabActiveStyledProps extends StyledProps {
    width?: number,
    left?: number,
    speed?: number
}

const transform = (props: TabActiveStyledProps) => `translateX(${props.left}%)`;
const transition = (props: TabActiveStyledProps) => `transform ${props.speed}s`;

const TabActiveStyled = styled.div<TabActiveStyledProps>`
  height: 4px;
  background-color: ${(props: TabActiveStyledProps) => props.theme.color.secondary};
  position: ${rules.position.absolute};
  bottom: ${(props: TabActiveStyledProps) => props.theme.spacing.s0};
  width: ${(props: TabActiveStyledProps) => `${props.width}%`};
  transform: ${transform};
  transition: ${transition};
`;

export default TabActiveStyled;