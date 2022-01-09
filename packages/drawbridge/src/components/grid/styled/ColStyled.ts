import styled, {css} from "styled-components";
import MediaUtils from "@utils/MediaUtils";
import {ColUIProps} from "@components/grid/Col";
import {StyledProps} from "@typings";

export interface ColStyledProps extends StyledProps, ColUIProps {}

type T = ColStyledProps;

function getWidth(breakpoint: string, columns?: number) {
    let width = "100%";

    if (columns) {
        width = `${(100 / 12) * columns}%`;
    }

    return MediaUtils.up(breakpoint, css`width: ${width};max-width: ${width};`);
}

const ColStyled = styled.div<T>`
  flex-grow: ${(p: T) => p.theme.flexGrow.fg1};
  position: ${(p: T) => p.theme.position.relative};
  display: ${(p: T) => p.theme.display.block};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  padding-left: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};
  padding-right: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};
  ${(p: T) => getWidth(p.theme.breakpoint.xs, p.xs)};
  ${(p: T) => getWidth(p.theme.breakpoint.sm, p.sm)};
  ${(p: T) => getWidth(p.theme.breakpoint.md, p.md)};
  ${(p: T) => getWidth(p.theme.breakpoint.lg, p.lg)};
  ${(p: T) => getWidth(p.theme.breakpoint.xl, p.xl)};
`;

export default ColStyled;