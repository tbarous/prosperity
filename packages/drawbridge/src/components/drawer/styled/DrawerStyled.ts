import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import rules from "@rules";

export interface DrawerStyledProps extends StyledProps, useMountChildStyledProps {
    overlay?: boolean,
}

const position = (props: DrawerStyledProps) => props.overlay ? rules.position.fixed : rules.position.relative;
const transform = (props: DrawerStyledProps) => props.mount ? `translateX(0)` : `translateX(-120%)`;
const transition = (props: DrawerStyledProps) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`;

const DrawerStyled = styled.div<DrawerStyledProps>`
  display: ${rules.display.flex};
  height: ${(props: DrawerStyledProps) => props.theme.dimension.d100};
  background-color: ${(props: DrawerStyledProps) => props.theme.color.dark};
  width: ${(props: DrawerStyledProps) => props.theme.dimension.d20};
  position: ${position};
  transform: ${transform};
  transition: ${transition};
`;

export default DrawerStyled;