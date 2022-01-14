import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

const ModalFooter = styled.div`
  overflow-y: ${p => p.theme.overflow.auto};
  position: ${p => p.theme.position.absolute};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  box-shadow: ${p => p.theme.shadow.medium};
  border-bottom-left-radius: ${p => p.theme.borderRadius.medium};
  border-bottom-right-radius: ${p => p.theme.borderRadius.medium};
  font-size: ${p => p.theme.fontSize.fs3};
  padding: ${p => `${px(p.theme.spacing.s3)} ${px(p.theme.spacing.s5)}`};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d20};
  bottom: ${p => px(p.theme.spacing.s0)};
  background-color: ${p => p.theme.color.surface};
`;

export default ModalFooter;