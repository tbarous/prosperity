import styled from "styled-components";
import {hexToRgb} from "@utils/ColorUtils";
import {StyledProps} from "@typings";

interface CheckboxIconWrapperStyledProps extends StyledProps {
    checked?: boolean,
    disabled?: boolean
}

type T = CheckboxIconWrapperStyledProps;

function getBorder(p: T) {
    if (p.disabled && p.checked) {
        return;
    }

    if (p.checked && !p.disabled) {
        return;
    }

    if (!p.checked && !p.disabled) {
        return "2px solid rgba(0, 0, 0, 0.6)";
    }

    if (!p.checked && p.disabled) {
        return "2px solid rgba(0, 0, 0, 0.2)";
    }
}

function getBackgroundColor(p: T) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    if (p.disabled && p.checked) {
        return `rgba(${r}, ${g}, ${b}, 0.5);`;
    }

    if (p.checked && !p.disabled) {
        return `rgba(${r}, ${g}, ${b}, 1);`;
    }

    if (!p.checked && !p.disabled) {
        return;
    }

    if (!p.checked && p.disabled) {
        return;
    }
}

const CheckboxIconWrapperStyled = styled.div<T>`
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  border-radius: ${(p: T) => p.theme.borderRadius.small};
  width: ${(p: T) => p.theme.spacing.s6};
  height: ${(p: T) => p.theme.spacing.s6};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  position: ${(p: T) => p.theme.position.relative};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`

export default CheckboxIconWrapperStyled;