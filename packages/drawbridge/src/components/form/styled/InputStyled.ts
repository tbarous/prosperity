import styled from "styled-components";
import {StyledProps} from "@typings";

export interface InputStyledProps extends StyledProps {}

const InputStyled = styled.input<InputStyledProps>`
  border: ${(props: InputStyledProps) => props.theme.border.none};
  height: ${(props: InputStyledProps) => props.theme.dimension.d100};
  width: ${(props: InputStyledProps) => props.theme.dimension.d100};
  padding: ${ (props: InputStyledProps) => props.theme.spacing.s0};
  margin: ${ (props: InputStyledProps) => props.theme.spacing.s0};
  font-size: ${(props: InputStyledProps) => props.theme.fontSize.md};
  border-radius: ${(props: InputStyledProps) => props.theme.borderRadius.medium};
  font-family: ${(props: InputStyledProps) => props.theme.fontFamily.primary};
  outline: none;
`;

export default InputStyled;