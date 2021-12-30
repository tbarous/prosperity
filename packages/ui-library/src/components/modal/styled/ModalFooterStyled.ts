import styled from "styled-components";
import Theme from "@theme/interfaces";

interface Props {
    theme: Theme
}

const ModalFooterStyled = styled.div`
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  border-bottom-left-radius: ${(props: Props) => props.theme.border.radius.primary};
  border-bottom-right-radius: ${(props: Props) => props.theme.border.radius.primary};
  font-size: ${(props: Props) => props.theme.font.size.md};
  padding: ${(props: Props) => props.theme.spacing.padding.sm} ${(props: Props) => props.theme.spacing.padding.lg};
  width: ${(props: Props) => props.theme.spacing.width.full};
  position: absolute;
  bottom: 0;
  height: 20%;
  overflow-y: auto;
  box-sizing: border-box;
`;

export default ModalFooterStyled;