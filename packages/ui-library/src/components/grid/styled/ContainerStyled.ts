import styled from "styled-components";
import Theme from "@theme/interfaces";
import {calculateContainerPadding, calculateContainerWidth} from "@components/grid/utils/ContainerUtils";
import FluidMediaEnum from "@components/grid/enums/FluidMediaEnum";

interface Props {
    fluid?: boolean,
    theme: Theme
}

const ContainerStyled = styled.div<Props>`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  box-sizing: border-box;
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.md, FluidMediaEnum.MD, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.lg, FluidMediaEnum.LG, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.xl, FluidMediaEnum.XL, props.fluid)};
  ${(props: Props) => calculateContainerPadding()};
`;

export default ContainerStyled;