import styled from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    disabled?: boolean,
    checked?: boolean
}

function getBackgroundColor(p: T) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    if (p.disabled) {
        if (p.checked) {
            return `rgba(${r}, ${g}, ${b}, 0.5);`;
        } else {
            return;
        }
    } else {
        if (p.checked) {
            return `rgba(${r}, ${g}, ${b}, 1);`;
        } else {
            return;
        }
    }
}

const CheckboxIconStyled = styled.div<T>`
  width: ${(p: T) => p.theme.spacing.s4};
  height: ${(p: T) => p.theme.spacing.s4};
  background: ${getBackgroundColor};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
`;

export default CheckboxIconStyled;