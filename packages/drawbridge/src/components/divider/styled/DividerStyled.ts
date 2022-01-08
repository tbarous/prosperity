import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface,
    spacing?: number,
    vertical?: boolean
}

function getHeight(p: T) {
    if (p.vertical) {
        return p.theme.dimension.d100;
    }

    return px(p.theme.spacing.s1);
}

function getWidth(p: T) {
    if (p.vertical) {
        return px(p.theme.spacing.s1);
    }

    return p.theme.dimension.d100;
}

function getMargin(p: T) {
    let spacing = p.spacing || 16;

    if (p.vertical) {
        return `${px(p.theme.spacing.s0)} ${px(spacing)}`;
    }

    return `${px(spacing)} ${px(p.theme.spacing.s0)}`;
}

const DividerStyled = styled.div<T>`
  height: ${getHeight};
  width: ${getWidth};
  background: ${(p: T) => p.theme.color.light};
  margin: ${getMargin};
`;

export default DividerStyled;