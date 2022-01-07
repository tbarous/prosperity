import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";

type T = StyledProps & { dark?: boolean, light?: boolean };

const DrawerTogglerIconStyled = styled(Icon)<T>`
  color: ${(p: T) => p.light ? p.theme.color.dark : p.theme.color.white};
`;

export default DrawerTogglerIconStyled;