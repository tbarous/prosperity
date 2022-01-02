import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import ColStyledGetters from "@components/grid/styled/col/ColStyledGetters";

export interface ColStyledProps extends StyledProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
    gutter?: number
}

const ColStyled = styled.div<ColStyledProps>`
  flex-grow: ${ColStyledGetters.FlexGrow};
  position: ${ColStyledGetters.Position};
  display: ${ColStyledGetters.Display};
  box-sizing: ${ColStyledGetters.BoxSizing};
  padding-left: ${ColStyledGetters.PaddingLeft};
  padding-right: ${ColStyledGetters.PaddingRight};

  ${(props: ColStyledProps) => Media.up(props.theme.breakpoint.xs, css`
    width: ${ColStyledGetters.Width(props.xs)};
    max-width: ${ColStyledGetters.MaxWidth(props.xs)};
  `)};

  ${(props: ColStyledProps) => Media.up(props.theme.breakpoint.sm, css`
    width: ${ColStyledGetters.Width(props.sm)};
    max-width: ${ColStyledGetters.MaxWidth(props.sm)};
  `)};

  ${(props: ColStyledProps) => Media.up(props.theme.breakpoint.md, css`
    width: ${ColStyledGetters.Width(props.md)};
    max-width: ${ColStyledGetters.MaxWidth(props.md)};
  `)};

  ${(props: ColStyledProps) => Media.up(props.theme.breakpoint.lg, css`
    width: ${ColStyledGetters.Width(props.lg)};
    max-width: ${ColStyledGetters.MaxWidth(props.lg)};
  `)};

  ${(props: ColStyledProps) => Media.up(props.theme.breakpoint.xl, css`
    width: ${ColStyledGetters.Width(props.xl)};
    max-width: ${ColStyledGetters.MaxWidth(props.xl)};
  `)};
`;

export default ColStyled;