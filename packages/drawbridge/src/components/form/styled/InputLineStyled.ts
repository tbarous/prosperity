import styled from "styled-components";
import {StyledProps} from "@typings";
import InputLineStyledGetters from "@components/form/styled/InputLineStyledGetters";

export interface InputLineStyledProps extends StyledProps {
    focused?: boolean
}

const InputLineStyled = styled.div<InputLineStyledProps>`
  @keyframes stretch {
    0% {
      transform: scale(.2);
    }

    100% {
      transform: scale(1);
    }
  }

  position: ${InputLineStyledGetters.Position};
  background-color: ${InputLineStyledGetters.BackgroundColor};
  bottom: ${InputLineStyledGetters.Bottom};
  left: ${InputLineStyledGetters.Left};
  width: ${InputLineStyledGetters.Width};
  height: ${InputLineStyledGetters.Height};
  
  transform: ${InputLineStyledGetters.Transform};
  
  transition: transform .5s;
  
  //animation-name: stretch;
  //animation-duration: .3s;
  //animation-timing-function: ease-out;
  //animation-direction: normal;
  //animation-fill-mode: forwards;
`;

export default InputLineStyled;