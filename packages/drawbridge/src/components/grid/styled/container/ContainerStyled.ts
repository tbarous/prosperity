import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import Media from "@theme/utils/Media";
import ContainerStyledGetters from "@components/grid/styled/container/ContainerStyledGetters";

export interface ContainerStyledProps extends StyledProps {
    fluid?: boolean
}

enum ContainerMaxWidthEnum {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

const ContainerStyled = styled.div<ContainerStyledProps>`
  width: ${ContainerStyledGetters.Width};
  height: ${ContainerStyledGetters.Height};
  box-sizing: ${ContainerStyledGetters.BoxSizing};
  padding-right: ${ContainerStyledGetters.PaddingRight};
  padding-left: ${ContainerStyledGetters.PaddingLeft};

  ${props => Media.up(props.theme.breakpoint.md, css`
    max-width: ${ContainerStyledGetters.MaxWidth(props, ContainerMaxWidthEnum.Medium)};
    margin-right: ${ContainerStyledGetters.Margin(props)};
    margin-left: ${ContainerStyledGetters.Margin(props)};
  `)};

  ${props => Media.up(props.theme.breakpoint.lg, css`
    max-width: ${ContainerStyledGetters.MaxWidth(props, ContainerMaxWidthEnum.Large)};
    margin-right: ${ContainerStyledGetters.Margin(props)};
    margin-left: ${ContainerStyledGetters.Margin(props)};
  `)};

  ${props => Media.up(props.theme.breakpoint.xl, css`
    max-width: ${ContainerStyledGetters.MaxWidth(props, ContainerMaxWidthEnum.XLarge)};
    margin-right: ${ContainerStyledGetters.Margin(props)};
    margin-left: ${ContainerStyledGetters.Margin(props)};
  `)};
`;

export default ContainerStyled;