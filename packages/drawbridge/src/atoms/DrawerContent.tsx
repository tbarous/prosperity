import styled from "styled-components";
import {StyledProps} from "@typings";

const DrawerContent = styled.div<StyledProps>`
  z-index: ${p => p.theme.zIndex.drawerContent};
  width: ${p => p.theme.dimension.d100};
`;

export default DrawerContent;