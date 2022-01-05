import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@theme/utils/MediaUtils";
import rules from "@rules";

export interface ColStyledProps extends StyledProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

const width = (columns?: number) => columns ? `${(100 / 12) * columns}%` : "";

const ColStyled = styled.div<ColStyledProps>`
  flex-grow: ${(props: ColStyledProps) => rules.flexGrow.fg1};
  position: ${(props: ColStyledProps) => rules.position.relative};
  display: ${(props: ColStyledProps) => rules.display.block};
  box-sizing: ${(props: ColStyledProps) => rules.boxSizing.borderBox};
  padding-left: ${(props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : ""};
  padding-right: ${(props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : ""};

  ${(props: ColStyledProps) => MediaUtils.up(props.theme.breakpoint.xs, css`
    width: ${width(props.xs)};
    max-width: ${width(props.xs)};
  `)};

  ${(props: ColStyledProps) => MediaUtils.up(props.theme.breakpoint.sm, css`
    width: ${width(props.sm)};
    max-width: ${width(props.sm)};
  `)};

  ${(props: ColStyledProps) => MediaUtils.up(props.theme.breakpoint.md, css`
    width: ${width(props.md)};
    max-width: ${width(props.md)};
  `)};

  ${(props: ColStyledProps) => MediaUtils.up(props.theme.breakpoint.lg, css`
    width: ${width(props.lg)};
    max-width: ${width(props.lg)};
  `)};

  ${(props: ColStyledProps) => MediaUtils.up(props.theme.breakpoint.xl, css`
    width: ${width(props.xl)};
    max-width: ${width(props.xl)};
  `)};
`;

export default ColStyled;