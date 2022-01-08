import styled from "styled-components";
import {hexToRgb} from "@utils/ColorUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    disabled?: boolean,
    checked?: boolean
}

function getBorder(p: T) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    if (p.disabled) {
        if (p.checked) {
            return `2px solid rgba(${r}, ${g}, ${b}, 0.5);`;
        } else {
            return `2px solid rgba(0, 0, 0, 0.2 );`;
        }
    } else {
        if (p.checked) {
            return `2px solid rgba(${r}, ${g}, ${b}, 1);`;
        } else {
            return `2px solid rgba(0, 0, 0, 0.6);`;
        }
    }
}

const CheckboxIconWrapper = styled.div<T>`
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  width: ${(p: T) => p.theme.spacing.s7};
  height: ${(p: T) => p.theme.spacing.s7};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  background-color: ${(p: T) => p.theme.color.white};
  position: ${(p: T) => p.theme.position.relative};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  border: ${getBorder};
`

export default CheckboxIconWrapper;