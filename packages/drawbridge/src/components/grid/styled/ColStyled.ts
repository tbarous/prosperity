import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";

type T = { xs?: number, sm?: number, md?: number, lg?: number, xl?: number, xxl?: number, gutter?: number } & StyledProps;

const width = (columns?: number) => columns ? `${(100 / 12) * columns}%` : "";

const ColStyled = styled.div<T>`
  flex-grow: ${(p: T) => p.theme.flexGrow.fg1};
  position: ${(p: T) => p.theme.position.relative};
  display: ${(p: T) => p.theme.display.block};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  padding-left: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};
  padding-right: ${(p: T) => p.gutter ? `${p.gutter / 2}px` : ""};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.xs, css`
    width: ${width(p.xs)};
    max-width: ${width(p.xs)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.sm, css`
    width: ${width(p.sm)};
    max-width: ${width(p.sm)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.md, css`
    width: ${width(p.md)};
    max-width: ${width(p.md)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.lg, css`
    width: ${width(p.lg)};
    max-width: ${width(p.lg)};
  `)};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.xl, css`
    width: ${width(p.xl)};
    max-width: ${width(p.xl)};
  `)};
`;

export default ColStyled;