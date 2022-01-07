import styled from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";

type T = StyledProps & { checked?: boolean, disabled?: boolean };

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
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  background-color: white;
  position: relative;
  justify-content: center;
  border: ${getBorder};
`

export default CheckboxIconWrapper;