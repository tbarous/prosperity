import styled from "styled-components";
import {StyledProps} from "@typings";

const DrawerOverlay = styled.div<StyledProps>`
  background: ${p => "rgba(255, 255, 255, 0.7)"};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  position: ${p => p.theme.position.absolute};
  top: ${p => p.theme.spacing.s0};
  left: ${p => p.theme.spacing.s0};
`

export default DrawerOverlay;