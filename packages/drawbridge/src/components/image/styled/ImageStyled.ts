import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { rounded?: boolean, roundedTop?: boolean, roundedBottom?: boolean };

const ImageStyled = styled.img<T>`
  object-fit: ${(p: T) => p.theme.objectFit.cover};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  border-top-left-radius: ${(p: T) => p.roundedTop || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none};
  border-top-right-radius: ${(p: T) => p.roundedTop || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none};
  border-bottom-left-radius: ${(p: T) => p.roundedBottom || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none};
  border-bottom-right-radius: ${(p: T) => p.roundedBottom || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none};
`;

export default ImageStyled;