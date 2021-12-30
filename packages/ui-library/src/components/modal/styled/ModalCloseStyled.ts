import styled from "styled-components";
import Icon from "@components/icon/Icon";
import Theme from "@theme/interfaces";

interface Props {
    theme: Theme
}

const ModalCloseStyled = styled(Icon)<Props>`
  position: fixed;
  top: .5rem;
  right: .5rem;
  cursor: pointer;
  border-radius: 50%;
  background: black;
  color: white;
  border: 1px solid;
  padding: .3rem;
  display: flex;
  align-items: center;
`;

export default ModalCloseStyled;