import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

export interface Props extends StyledProps {}

const Card = styled.div<Props>`
  border-radius: ${p => p.theme.borderRadius.medium};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  box-shadow: ${p => p.theme.shadow.light};
  background-color: ${p => p.theme.color.surface};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  transition: ${p => p.theme.transition.elevation};

  &:hover {
    box-shadow: ${p => p.theme.shadow.elevate};
  }
`;

export default Card;