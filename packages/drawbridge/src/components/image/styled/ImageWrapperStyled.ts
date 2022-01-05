import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ImageWrapperStyledProps extends StyledProps {
    width?: number,
    height?: number
}

const ImageWrapperStyled = styled.div<ImageWrapperStyledProps>`
  width: ${(props: ImageWrapperStyledProps) => props.width ? `${props.width}px` : `100%`};
  height: ${(props: ImageWrapperStyledProps) => props.height ? `${props.height}px` : `100%`};
  display: ${rules.display.flex}
`;

export default ImageWrapperStyled;