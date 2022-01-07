import styled from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";

type T = StyledProps & { disabled?: boolean, checked?: boolean };

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
  width: 12px;
  height: 12px;
  background: ${getBackgroundColor};
  border-radius: 50%;
`;

export default CheckboxIconStyled;