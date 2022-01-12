import styled from "styled-components";
import {StyledProps} from "@typings";

export interface LinkedLineStyledProps extends StyledProps {
    hovered?: boolean,
    active?: boolean
}

type T = LinkedLineStyledProps;

function getTransform(p: T) {
    if (p.active) {
        return "scale(1)";
    }

    if (p.hovered) {
        return "scale(1)";
    }

    return "scale(0)";
}

function getBackgroundColor(p: T) {
    if (p.active) {
        return p.theme.color.primary;
    }

    return p.theme.color.dark;
}

const LinkLineStyled = styled.div<T>`
  transform: ${getTransform};
  background-color: ${getBackgroundColor};
  position: ${(p: T) => p.theme.position.absolute};
  height: ${(p: T) => p.theme.spacing.s1};
  width: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.block};
  bottom: -${(p: T) => p.theme.spacing.s3};
  transition: all .3s;
`;

export default LinkLineStyled;