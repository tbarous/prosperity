import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const DrawerContent = styled.div<T>`
  z-index: 999;
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default DrawerContent;