import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

interface RowStyledProps extends StyledProps {
    fluid?: boolean,
    gutter?: number
}

type T = RowStyledProps;

function getMargin(p: T) {
    if (p.gutter) {
        let negativeHalfGutter = -0.5 * p.gutter;

        return px(negativeHalfGutter - p.theme.spacing.s5);
    }

    return `-${px(p.theme.spacing.s5)}`;
}


const RowStyled = styled.div<T>`
  margin-left: ${getMargin};
  margin-right: ${getMargin};
  height: ${(p: T) => p.theme.dimension.auto};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  display: ${(p: T) => p.theme.display.flex};
  flex-wrap: ${(p: T) => p.theme.flexWrap.wrap};
  height: ${(p: T) => p.theme.dimension.d100};
`;

export default RowStyled;