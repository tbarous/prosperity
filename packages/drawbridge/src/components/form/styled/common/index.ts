import { StyledProps } from "@typings";
import {hexToRgb} from "@utils/ColorUtils";

type T = StyledProps & { checked?: boolean, disabled?: boolean };

export function getBorder(p: T) {
    if (p.disabled && p.checked) {
        return ;
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

export function getBackgroundColor(p: T) {
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
