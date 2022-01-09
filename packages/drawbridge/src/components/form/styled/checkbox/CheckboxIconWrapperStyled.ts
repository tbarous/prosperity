import styled from "styled-components";
import {hexToRgb} from "@utils/ColorUtils";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

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

function getWidth(p: T) {
    return px(p.theme.dimension.checkbox.width)
}

function getHeight(p: T) {
    return px(p.theme.dimension.checkbox.height);
}

const CheckboxIconWrapperStyled = styled.div<T>`
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  width: ${getWidth};
  height: ${getHeight};
  border-radius: ${(p: T) => p.theme.borderRadius.small};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  position: ${(p: T) => p.theme.position.relative};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`

export default CheckboxIconWrapperStyled;