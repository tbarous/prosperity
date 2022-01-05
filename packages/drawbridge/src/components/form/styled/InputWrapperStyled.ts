import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface InputWrapperStyledProps extends StyledProps {
    focused?: boolean
}

const InputStyledWrapper = styled.div<InputWrapperStyledProps>`
  height: ${(props: InputWrapperStyledProps) => props.theme.spacing.s10};
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  position: ${rules.position.relative};
  border-bottom: ${(props: InputWrapperStyledProps) => props.theme.border.light};
  border-color: ${(props: InputWrapperStyledProps) => props.theme.color.light};
`;

export default InputStyledWrapper;