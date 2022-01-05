import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ModalHeaderStyledProps extends StyledProps {
}

const ModalHeaderStyled = styled.div<ModalHeaderStyledProps>`
  border-top-left-radius: ${(props: ModalHeaderStyledProps) => props.theme.borderRadius.medium};
  border-top-right-radius: ${(props: ModalHeaderStyledProps) => props.theme.borderRadius.medium};
  box-shadow: ${(props: ModalHeaderStyledProps) => props.theme.shadow.medium};
  font-size: ${(props: ModalHeaderStyledProps) => props.theme.fontSize.lg};
  width: ${(props: ModalHeaderStyledProps) => props.theme.dimension.d100};
  font-family: ${(props: ModalHeaderStyledProps) => props.theme.fontFamily.secondary};
  height: ${(props: ModalHeaderStyledProps) => props.theme.dimension.d10};
  box-sizing: ${rules.boxSizing.borderBox};
`;

export default ModalHeaderStyled;