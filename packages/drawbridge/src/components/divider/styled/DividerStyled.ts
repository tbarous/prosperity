import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface DividerStyledProps extends StyledProps {
    spacing?: number,
    vertical?: boolean
}

type T = DividerStyledProps;

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
  margin: ${getMargin};
  background: ${(p: T) => p.theme.color.light};
`;

export default DividerStyled;