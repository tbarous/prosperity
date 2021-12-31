import styled from "styled-components";
import {calculateContainerPadding, calculateContainerWidth} from "@components/grid/utils/ContainerUtils";
import FluidMediaEnum from "@components/grid/enums/FluidMediaEnum";
import {StyledProps} from "@typings";

interface Props extends StyledProps{
    fluid?: boolean
}

const ContainerStyled = styled.div<Props>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.md, FluidMediaEnum.MD, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.lg, FluidMediaEnum.LG, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.xl, FluidMediaEnum.XL, props.fluid)};
  ${(props: Props) => calculateContainerPadding()};
`;

export default ContainerStyled;