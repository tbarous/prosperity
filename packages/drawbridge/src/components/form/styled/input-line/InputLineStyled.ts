import styled from "styled-components";
import {StyledProps} from "@typings";
import InputLineStyledGetters from "@components/form/styled/input-line/InputLineStyledGetters";

export interface InputLineStyledProps extends StyledProps {
    focused?: boolean
}

const InputLineStyled = styled.div<InputLineStyledProps>`
  position: ${InputLineStyledGetters.Position};
  background-color: ${InputLineStyledGetters.BackgroundColor};
  bottom: ${InputLineStyledGetters.Bottom};
  left: ${InputLineStyledGetters.Left};
  width: ${InputLineStyledGetters.Width};
  height: ${InputLineStyledGetters.Height};
  transform: ${InputLineStyledGetters.Transform};
  transition: ${InputLineStyledGetters.Transition};
`;

export default InputLineStyled;