import styled from "styled-components";
import {StyledProps} from "@typings";

export interface DrawerContentProps extends StyledProps {}

type T = DrawerContentProps;

const DrawerContent = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.drawerContent};
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default DrawerContent;