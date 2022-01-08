import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { active?: boolean };

const SwitchCircleStyled = styled.div<T>`
  width: 20px;
  height: 20px;
  background: red;
  position: absolute;
  border-radius: 50%;
  transform: translateX(${(p: T) => p.active ? "calc(100% + 2px)" : "-2px"});
  transition: transform .3s;
  top: -2px;
`;

export default SwitchCircleStyled;