import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";
import {px} from "@utils/ThemeUtils";

enum ContainerMaxWidthEnum {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

type T = { fluid?: boolean } & StyledProps;

const ContainerStyled = styled.div<T>`
  height: ${(p: T) => p.theme.dimension.auto};
  padding-right: ${(p: T) => px(p.theme.spacing.s9)};
  padding-left: ${(p: T) => px(p.theme.spacing.s9)};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  width: ${(p: T) => p.theme.dimension.d100};

  ${p => MediaUtils.up(p.theme.breakpoint.md, css`
    max-width: ${!p.fluid ? ContainerMaxWidthEnum.Medium : ""};
    margin-right: ${!p.fluid ? p.theme.spacing.auto : ""};
    margin-left: ${!p.fluid ? p.theme.spacing.auto : ""};
  `)};

  ${p => MediaUtils.up(p.theme.breakpoint.lg, css`
    max-width: ${!p.fluid ? ContainerMaxWidthEnum.Large : ""};
    margin-right: ${!p.fluid ? p.theme.spacing.auto : ""};
    margin-left: ${!p.fluid ? p.theme.spacing.auto : ""};
  `)};

  ${p => MediaUtils.up(p.theme.breakpoint.xl, css`
    max-width: ${!p.fluid ? ContainerMaxWidthEnum.XLarge : ""};
    margin-right: ${!p.fluid ? p.theme.spacing.auto : ""};
    margin-left: ${!p.fluid ? p.theme.spacing.auto : ""};
  `)};
`;

export default ContainerStyled;