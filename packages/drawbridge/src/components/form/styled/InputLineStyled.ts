import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface InputLineStyledProps extends StyledProps {
    focused?: boolean
}

const transform = (props: InputLineStyledProps) => props.focused ? "scale(1)" : "scale(0)";

const InputLineStyled = styled.div<InputLineStyledProps>`
  position: ${rules.position.absolute};
  background-color: ${ (props: InputLineStyledProps) => props.theme.color.primary};
  bottom: -1px;
  left: ${(props: InputLineStyledProps) => props.theme.spacing.s0};
  width: ${(props: InputLineStyledProps) => props.theme.dimension.d100};
  height: 2px;
  transform: ${transform};
  transition: transform .5s;
`;

export default InputLineStyled;