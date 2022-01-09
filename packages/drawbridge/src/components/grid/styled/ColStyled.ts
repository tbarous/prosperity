import styled, {css} from "styled-components";
import MediaUtils from "@utils/MediaUtils";
import {ColUIProps} from "@components/grid/Col";
import {StyledProps} from "@typings";

export interface ColStyledProps extends StyledProps, ColUIProps {}

type T = ColStyledProps;

function getWidth(columns?: number) {
    if (columns) {
        return `${(100 / 12) * columns}%`;
    }
}

const ColStyled = styled.div<T>`
  flex-grow: ${(p: T) => p.theme.flexGrow.fg1};
  position: ${(p: T) => p.theme.position.relative};
  display: ${(p: T) => p.theme.display.block};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  padding-left: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};
  padding-right: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.xs, css`
    width: ${getWidth(p.xs)};
    max-width: ${getWidth(p.xs)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.sm, css`
    width: ${getWidth(p.sm)};
    max-width: ${getWidth(p.sm)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.md, css`
    width: ${getWidth(p.md)};
    max-width: ${getWidth(p.md)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.lg, css`
    width: ${getWidth(p.lg)};
    max-width: ${getWidth(p.lg)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.xl, css`
    width: ${getWidth(p.xl)};
    max-width: ${getWidth(p.xl)};
  `)};
`;

export default ColStyled;