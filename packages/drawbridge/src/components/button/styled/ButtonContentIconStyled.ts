import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";
import {IconInterface} from "@icons";
import {StyledProps} from "@typings";
import {ButtonUIProps} from "@components/button/Button";

export interface ButtonContentIconProps extends StyledProps, ButtonUIProps {
    icon?: IconInterface
}

type T = ButtonContentIconProps;

function getColor(p: T) {
    if (p.primary) {
        return p.theme.color.surface;
    }

    if (p.secondary) {
        return p.theme.color.dark;
    }
}

function getMargin(p: T) {
    return px(p.theme.spacing.s4);
}

const ButtonContentIconStyled = styled(Icon)<T>`
  color: ${getColor};
  margin-right: ${getMargin};
  width: ${(p: T) => px(p.theme.spacing.s6)};
  height: ${(p: T) => px(p.theme.spacing.s6)};
`;

export default ButtonContentIconStyled;