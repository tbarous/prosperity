import styled, {css} from "styled-components";
import MediaUtils from "@utils/MediaUtils";
import {StyledProps} from "@typings";

const ModalContent = styled.div<StyledProps>`
  background-color: ${p => p.theme.color.surface};
  border-radius: ${p => p.theme.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.medium};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d80};
  ${p => MediaUtils.up(p.theme.breakpoint.md, css`width: 500px;`)};
`;

export default ModalContent;