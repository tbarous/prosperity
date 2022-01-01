import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import {
    ContainerBoxSizing,
    ContainerHeight,
    ContainerPaddingLeft,
    ContainerPaddingRight,
    ContainerWidth,
    GetMargin,
    GetMaxWidth,
} from "@components/grid/styled/ContainerStyledGetters";

export interface ContainerStyledProps extends StyledProps {
    fluid?: boolean
}

enum ContainerMaxWidthEnum {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

const ContainerStyled = styled.div<ContainerStyledProps>`
  width: ${ContainerWidth};
  height: ${ContainerHeight};
  box-sizing: ${ContainerBoxSizing};
  padding-right: ${ContainerPaddingRight};
  padding-left: ${ContainerPaddingLeft};

  ${props => Media.up(props.theme.breakpoint.md, css`
    max-width: ${GetMaxWidth(props, ContainerMaxWidthEnum.Medium)};
    margin-right: ${GetMargin(props)};
    margin-left: ${GetMargin(props)};
  `)};

  ${props => Media.up(props.theme.breakpoint.lg, css`
    max-width: ${GetMaxWidth(props, ContainerMaxWidthEnum.Large)};
    margin-right: ${GetMargin(props)};
    margin-left: ${GetMargin(props)};
  `)};

  ${props => Media.up(props.theme.breakpoint.xl, css`
    max-width: ${GetMaxWidth(props, ContainerMaxWidthEnum.XLarge)};
    margin-right: ${GetMargin(props)};
    margin-left: ${GetMargin(props)};
  `)};
`;

export default ContainerStyled;