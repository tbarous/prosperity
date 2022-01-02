import styled from "styled-components";
import {StyledProps} from "@typings";
import InputWrapperStyledGetters from "@components/form/styled/input-wrapper/InputWrapperStyledGetters";

export interface InputWrapperStyledProps extends StyledProps {
    focused?: boolean
}

const InputStyledWrapper = styled.div<InputWrapperStyledProps>`
  height: ${InputWrapperStyledGetters.Height};
  display: ${InputWrapperStyledGetters.Display};
  align-items: ${InputWrapperStyledGetters.AlignItems};
  position: ${InputWrapperStyledGetters.Position};
  border-bottom: ${InputWrapperStyledGetters.BorderBottom};
  border-color: ${InputWrapperStyledGetters.BorderColor};
`;

export default InputStyledWrapper;