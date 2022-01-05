import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface InputLabelStyledProps extends StyledProps {
    focused?: boolean,
    hasValue?: boolean
}

const fontSize = (props: InputLabelStyledProps) => props.focused || props.hasValue ? props.theme.fontSize.xs : props.theme.fontSize.md;
const color = (props: InputLabelStyledProps) => props.focused ? props.theme.color.primary : props.theme.color.light;
const transform = (props: InputLabelStyledProps) => props.focused || props.hasValue ? "translateY(-20px)" : "";
const transition = (props: InputLabelStyledProps) => "transform .2s linear";

const InputStyledLabel = styled.label<InputLabelStyledProps>`
  position: ${rules.position.absolute};
  font-size: ${fontSize};
  color: ${color};
  font-weight: ${(props: InputLabelStyledProps) => props.theme.fontWeight.bold};
  pointer-events: none;
  transform: ${transform};
  transition: ${transition};
  font-family: ${(props: InputLabelStyledProps) => props.theme.fontFamily.primary};
`;

export default InputStyledLabel;