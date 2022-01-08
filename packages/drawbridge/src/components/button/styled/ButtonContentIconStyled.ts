import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";
import {IconInterface} from "@icons";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export interface T {
    theme: ThemeInterface,
    primary: boolean,
    secondary: boolean,
    icon?: IconInterface
}

function getColor(p: T) {
    return p.secondary ? p.theme.color.dark : p.theme.color.white;
}

function getMargin(p: T) {
    return px(p.theme.spacing.s4);
}

const ButtonContentIconStyled = styled(Icon)<T>`
  color: ${getColor};
  margin-right: ${getMargin};
`;

export default ButtonContentIconStyled;