import styled from "styled-components";
import {StyledProps} from "@typings";

interface ImageWrapperStyledProps extends StyledProps {
    width?: number,
    height?: number
}

type T = ImageWrapperStyledProps;

function getWidth(p: T) {
    if (p.width) {
        return `${p.width}px`;
    }

    return p.theme.dimension.d100;
}

function getHeight(p: T) {
    if (p.height) {
        return `${p.height}px`;
    }

    return p.theme.dimension.d100;
}

const ImageWrapperStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${getWidth};
  height: ${getHeight};
`;

export default ImageWrapperStyled;