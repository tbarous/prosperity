import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { width?: number, height?: number };

const ImageWrapperStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => p.width ? `${p.width}px` : p.theme.dimension.d100};
  height: ${(p: T) => p.height ? `${p.height}px` : p.theme.dimension.d100};
`;

export default ImageWrapperStyled;