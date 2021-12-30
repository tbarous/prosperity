import styled from "styled-components";
import Theme from "@theme/interfaces";

interface Props {
    theme: Theme
}

const ModalHeaderWrapper = styled.div`
  border-top-left-radius: ${(props: Props) => props.theme.border.radius.primary};
  border-top-right-radius: ${(props: Props) => props.theme.border.radius.primary};
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  font-size: ${(props: Props) => props.theme.font.size.lg};
  width: ${(props: Props) => props.theme.spacing.width.full};
  font-family: ${(props: Props) => props.theme.font.family.secondary};
  height: 10%;
  box-sizing: border-box;
`;

export default ModalHeaderWrapper;