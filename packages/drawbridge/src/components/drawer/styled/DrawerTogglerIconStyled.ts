import styled from "styled-components";
import Icon from "@components/icon/Icon";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    dark?: boolean,
    light?: boolean,
}

function getColor(p: T) {
    return p.light ? p.theme.color.dark : p.theme.color.white;
}

const DrawerTogglerIconStyled = styled(Icon)<T>`
  color: ${getColor};
`;

export default DrawerTogglerIconStyled;