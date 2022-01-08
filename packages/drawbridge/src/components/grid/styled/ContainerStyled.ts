import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

enum ContainerMaxWidths {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

interface T {
    fluid?: boolean,
    theme: ThemeInterface
}

function getMaxWidth(p: T, width: string) {
    return !p.fluid ? width : "";
}

function getMargin(p: T) {
    return !p.fluid ? p.theme.spacing.auto : "";
}

const ContainerStyled = styled.div<T>`
  padding-right: ${(p: T) => px(p.theme.spacing.s5)};
  padding-left: ${(p: T) => px(p.theme.spacing.s5)};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  width: ${(p: T) => p.theme.dimension.d100};

  ${p => MediaUtils.up(p.theme.breakpoint.md, css`
    max-width: ${getMaxWidth(p, ContainerMaxWidths.Medium)};
    margin-right: ${getMargin(p)};
    margin-left: ${getMargin(p)};
  `)};

  ${p => MediaUtils.up(p.theme.breakpoint.lg, css`
    max-width: ${getMaxWidth(p, ContainerMaxWidths.Large)};
    margin-right: ${getMargin(p)};
    margin-left: ${getMargin(p)};
  `)};

  ${p => MediaUtils.up(p.theme.breakpoint.xl, css`
    max-width: ${getMaxWidth(p, ContainerMaxWidths.XLarge)};
    margin-right: ${getMargin(p)};
    margin-left: ${getMargin(p)};
  `)};
`;

export default ContainerStyled;