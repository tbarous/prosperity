import styled, {css} from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";
import MediaUtils from "@utils/MediaUtils";

export interface ContainerStyledProps extends StyledProps {
    fluid?: boolean
}

enum ContainerMaxWidthEnum {
    Medium = "750px",
    Large = "970px",
    XLarge = "1170px"
}

const maxWidth = (props: ContainerStyledProps, width: string) => !props.fluid ? width : "";
const margin = (props: ContainerStyledProps) => !props.fluid ? props.theme.spacing.auto : "";

const ContainerStyled = styled.div<ContainerStyledProps>`
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: ${(props: ContainerStyledProps) => rules.boxSizing.borderBox};
  width: ${(props: ContainerStyledProps) => props.theme.dimension.d100};

  ${props => MediaUtils.up(props.theme.breakpoint.md, css`
    max-width: ${maxWidth(props, ContainerMaxWidthEnum.Medium)};
    margin-right: ${margin(props)};
    margin-left: ${margin(props)};
  `)};

  ${props => MediaUtils.up(props.theme.breakpoint.lg, css`
    max-width: ${maxWidth(props, ContainerMaxWidthEnum.Large)};
    margin-right: ${margin(props)};
    margin-left: ${margin(props)};
  `)};

  ${props => MediaUtils.up(props.theme.breakpoint.xl, css`
    max-width: ${maxWidth(props, ContainerMaxWidthEnum.XLarge)};
    margin-right: ${margin(props)};
    margin-left: ${margin(props)};
  `)};
`;

export default ContainerStyled;