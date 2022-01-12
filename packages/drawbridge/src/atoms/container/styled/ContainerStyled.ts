import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";
import {px} from "@utils/ThemeUtils";

enum ContainerMaxWidths {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

interface ContainerStyledProps extends StyledProps {
    fluid?: boolean,
}

type T = ContainerStyledProps;

function getMediaMaxWidthMargin(p: T, breakpoint: any, maxWidth?: string) {
    let width;
    let margin;

    if (!p.fluid) {
        width = maxWidth;
    }

    if (!p.fluid) {
        margin = p.theme.spacing.auto;
    }

    return MediaUtils.up(breakpoint, css`
      max-width: ${width};
      margin-right: ${margin};
      margin-left: ${margin};
    `)
}

const ContainerStyled = styled.div<T>`
  padding-right: ${(p: T) => px(p.theme.spacing.s5)};
  padding-left: ${(p: T) => px(p.theme.spacing.s5)};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  width: ${(p: T) => p.theme.dimension.d100};
  ${p => getMediaMaxWidthMargin(p, p.theme.breakpoint.md, ContainerMaxWidths.Medium)};
  ${p => getMediaMaxWidthMargin(p, p.theme.breakpoint.lg, ContainerMaxWidths.Large)};
  ${p => getMediaMaxWidthMargin(p, p.theme.breakpoint.xl, ContainerMaxWidths.XLarge)};
`;

export default ContainerStyled;