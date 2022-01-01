import styled from "styled-components";
import {StyledProps} from "@typings";
import BadgeStyledGetters from "@components/badge/styled/BadgeStyledGetters";

export interface BadgeStyledProps extends StyledProps {

}

const BadgeStyled = styled.span<BadgeStyledProps>`  
  display: inline-block;
  position: absolute;
  width: ${BadgeStyledGetters.width};
  align-items: ${BadgeStyledGetters.alignItems};
  background: ${BadgeStyledGetters.backgroundColor};
  color: ${BadgeStyledGetters.color};
  justify-content: center;
  height: 30px;
`;

export default BadgeStyled;