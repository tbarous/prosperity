import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = { fluid?: boolean, gutter?: number } & StyledProps;

function getMargin(p: T) {
    if (p.gutter) {
        `-${px((p.gutter * .5) + p.theme.spacing.s5)}`;
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