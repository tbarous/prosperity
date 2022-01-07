import styled from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";
import {getBackgroundColor, getBorder} from "@components/form/styled/common";

type T = StyledProps & { checked?: boolean, disabled?: boolean };

const CheckboxIconWrapper = styled.div<T>`
  border-radius: 2px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background-color: ${getBackgroundColor};
  position: relative;
  justify-content: center;
  border: ${getBorder};
`

export default CheckboxIconWrapper;