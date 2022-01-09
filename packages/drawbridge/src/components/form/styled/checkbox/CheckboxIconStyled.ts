import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";

export interface CheckboxIconStyledProps extends StyledProps {}

type T = CheckboxIconStyledProps;

const CheckboxIconStyled = styled(Icon)<T>`
  color: ${(p: T) => p.theme.color.white};
  width: 12px;
  height: 12px;
`;

export default CheckboxIconStyled;