import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { hovered?: boolean, active?: boolean };

const LinkLineStyled = styled.div<T>`
  transform: ${(p: T) => p.active ? "scale(1)" : p.hovered ? "scale(1)" : "scale(0)"};
  transition: all .3s;
  position: absolute;
  //border-radius: 8px;
  //height: 100%;
  height: 3px;
  width: 100%;
  //pointer-events: none;

  // border: 2px solid ${(p: T) => p.theme.color.primary};
    background: ${(p: T) => p.active ? p.theme.color.primary : p.theme.color.dark};
  display: block;
  bottom: -6px;
`;

export default LinkLineStyled;