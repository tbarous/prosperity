import styled from "styled-components";
import {StyledProps} from "@typings";
import InputStyledWrapperGetters from "@components/form/styled/InputStyledWrapperGetters";

export interface InputStyledWrapperProps extends StyledProps {
}

const InputStyledWrapper = styled.div<InputStyledWrapperProps>`
  border: ${InputStyledWrapperGetters.border};
  height: ${InputStyledWrapperGetters.height};
  display: ${InputStyledWrapperGetters.display};
  align-items: ${InputStyledWrapperGetters.alignItems};
  position: ${InputStyledWrapperGetters.position};
`;

export default InputStyledWrapper;