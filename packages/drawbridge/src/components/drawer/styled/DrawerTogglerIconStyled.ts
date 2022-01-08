import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";

type T = StyledProps & { dark?: boolean, light?: boolean };

function getColor(p: T) {
    return p.light ? p.theme.color.dark : p.theme.color.white;
}

const DrawerTogglerIconStyled = styled(Icon)<T>`
  color: ${getColor};
`;

export default DrawerTogglerIconStyled;