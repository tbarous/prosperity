import styled from "styled-components";
import {StyledProps} from "@typings";

export interface AppStyledProps extends StyledProps {}

type T = AppStyledProps;

const AppStyled = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  height: ${(p: T) => p.theme.dimension.d100};
`;

export default AppStyled;