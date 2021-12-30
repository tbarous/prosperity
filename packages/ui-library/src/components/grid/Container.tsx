import React, {ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";
import Theme from "@theme/interfaces";
import {up} from "../../theme/utils/Breakpoint";

enum fluidityMapping {
    MD = "750px",
    LG = "970px",
    XL = "1170px"
}

const calculateContainerWidth = (breakpoint: string, width: string, isFluid?: boolean) => {
    if (isFluid) return;

    return up(breakpoint, `width: ${width};`)
}

interface WrapperProps {
    fluid?: boolean,
    theme: Theme
}

const Wrapper = styled.div<WrapperProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: auto;
  box-sizing: border-box;

  ${(props: WrapperProps) => calculateContainerWidth(props.theme.breakpoint.md, fluidityMapping.MD, props.fluid)};
  ${(props: WrapperProps) => calculateContainerWidth(props.theme.breakpoint.lg, fluidityMapping.LG, props.fluid)};
  ${(props: WrapperProps) => calculateContainerWidth(props.theme.breakpoint.xl, fluidityMapping.XL, props.fluid)};
`;

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, fluid} = props;

    return (
        <Wrapper fluid={fluid}>
            {children}
        </Wrapper>
    )
}

export default Container;