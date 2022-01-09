import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

interface ModalFooterStyledProps extends StyledProps {}

type T = ModalFooterStyledProps;

const ModalFooterStyled = styled.div`
  overflow-y: ${(p: T) => p.theme.overflow.auto};
  position: ${(p: T) => p.theme.position.absolute};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  border-bottom-left-radius: ${(p: T) => p.theme.borderRadius.medium};
  border-bottom-right-radius: ${(p: T) => p.theme.borderRadius.medium};
  font-size: ${(p: T) => p.theme.fontSize.md};
  padding: ${(p: T) => `${px(p.theme.spacing.s3)} ${px(p.theme.spacing.s5)}`};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d20};
  bottom: ${(p: T) => px(p.theme.spacing.s0)};
  background-color: ${(p: T) => p.theme.color.white};
`;

export default ModalFooterStyled;