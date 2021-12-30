import styled from "styled-components";
import Theme from "@theme/interfaces";
import {calculateContainerPadding, calculateContainerWidth} from "@components/grid/utils/ContainerUtils";
import fluidityMapping from "@components/grid/enums/ContainerEnums";

interface Props {
    fluid?: boolean,
    theme: Theme
}

const ContainerWrapper = styled.div<Props>`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  box-sizing: border-box;
  
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.md, fluidityMapping.MD, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.lg, fluidityMapping.LG, props.fluid)};
  ${(props: Props) => calculateContainerWidth(props.theme.breakpoint.xl, fluidityMapping.XL, props.fluid)};
  ${(props: Props) => calculateContainerPadding(undefined)};
`;

export default ContainerWrapper;