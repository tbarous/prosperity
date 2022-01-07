import styled from "styled-components";
import Icon from "@components/icon/Icon";

const CheckboxIconStyled = styled.div`
  width: 12px;
  height: 12px;
  background: ${p =>p.theme.color.primary};
  border-radius: 50%;
`;

export default CheckboxIconStyled;