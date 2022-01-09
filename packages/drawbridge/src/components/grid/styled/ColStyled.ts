import styled, {css} from "styled-components";
import MediaUtils from "@utils/MediaUtils";
import {ColUIProps} from "@components/grid/Col";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export interface ColStyledProps extends StyledProps, ColUIProps {
    count?: number
}

type T = ColStyledProps;

function getWidth(breakpoint: string, columns?: number, count?: number) {
    let width;

    if (columns) {
        const colPercentage = (100 / 12) * columns;

        width = `${colPercentage}%`;
    }

    return MediaUtils.up(breakpoint, css`width: ${width};max-width: ${width};`);
}

function getPadding(p: T) {
    if (p.gutter) {
        return px(p.gutter / 2);
    }
}

const ColStyled = styled.div<T>`
  flex-grow: ${(p: T) => p.theme.flexGrow.fg1};
  position: ${(p: T) => p.theme.position.relative};
  display: ${(p: T) => p.theme.display.block};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  padding-left: ${getPadding};
  padding-right: ${getPadding};
  margin-left: ${getPadding};
  margin-right: ${getPadding};

  ${(p: T) => getWidth(p.theme.breakpoint.xs, p.xs, p.count)};
  ${(p: T) => getWidth(p.theme.breakpoint.sm, p.sm, p.count)};
  ${(p: T) => getWidth(p.theme.breakpoint.md, p.md, p.count)};
  ${(p: T) => getWidth(p.theme.breakpoint.lg, p.lg, p.count)};
  ${(p: T) => getWidth(p.theme.breakpoint.xl, p.xl, p.count)};
`;

export default ColStyled;