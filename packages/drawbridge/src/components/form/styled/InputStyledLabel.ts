import styled from "styled-components";
import {StyledProps} from "@typings";
import InputStyledLabelGetters from "@components/form/styled/InputStyledLabelGetters";

export interface InputStyledLabelProps extends StyledProps {
    focused?: boolean
}

const InputStyledLabel = styled.label<InputStyledLabelProps>`
  position: ${InputStyledLabelGetters.position};
  left: ${InputStyledLabelGetters.left};
  font-size: ${InputStyledLabelGetters.fontSize};
  color: ${InputStyledLabelGetters.color};
  font-weight: ${InputStyledLabelGetters.fontWeight};
  pointer-events: none;
  transform: ${(props: InputStyledLabelProps) => props.focused ? "translateY(-100%)" : ""};
  transition: transform .2s linear;
`;

export default InputStyledLabel;