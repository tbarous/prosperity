import styled from "styled-components";
import Theme from "@theme/interfaces";

interface Props {
    theme: Theme
}

const ModalBodyStyled = styled.div<Props>`
  font-size: ${(props: Props) => props.theme.font.size.md};
  width: ${(props: Props) => props.theme.spacing.width.full};
  overflow-y: auto;
  height: 70%;
  box-sizing: border-box;
`;

export default ModalBodyStyled;