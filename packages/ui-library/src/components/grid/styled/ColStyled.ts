import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import {
    ColBoxSizing,
    ColDisplay,
    ColPaddingLeft,
    ColPaddingRight,
    ColPosition, GetWidth,
} from "@components/grid/styled/ColStyledGetters";

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
  flex-grow: 1;
  position: ${ColPosition};
  display: ${ColDisplay};
  box-sizing: ${ColBoxSizing};
  padding-left: ${ColPaddingLeft};
  padding-right: ${ColPaddingRight};

  ${props => Media.up(props.theme.breakpoint.xs, css`
    width: ${GetWidth(props.xs)};
    max-width: ${GetWidth(props.xs)};
  `)};

  ${props => Media.up(props.theme.breakpoint.sm, css`
    width: ${GetWidth(props.sm)};
    max-width: ${GetWidth(props.sm)};
  `)};

  ${props => Media.up(props.theme.breakpoint.md, css`
    width: ${GetWidth(props.md)};
    max-width: ${GetWidth(props.md)};
  `)};

  ${props => Media.up(props.theme.breakpoint.lg, css`
    width: ${GetWidth(props.lg)};
    max-width: ${GetWidth(props.lg)};
  `)};

  ${props => Media.up(props.theme.breakpoint.xl, css`
    width: ${GetWidth(props.xl)};
    max-width: ${GetWidth(props.xl)};
  `)};
`;

export default ColStyled;