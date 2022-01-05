import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ImageWrapperStyledProps extends StyledProps {
    width?: number,
    height?: number
}

const width = (props: ImageWrapperStyledProps) => props.width ? `${props.width}px` : props.theme.dimension.d100;
const height = (props: ImageWrapperStyledProps) => props.height ? `${props.height}px` : props.theme.dimension.d100;

const ImageWrapperStyled = styled.div<ImageWrapperStyledProps>`
  display: ${rules.display.flex};
  width: ${width};
  height: ${height};
`;

export default ImageWrapperStyled;