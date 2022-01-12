import React from "react";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

enum DirectionVariations {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

enum SpacingVariations {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

interface Props extends StyledProps {
    variation: DirectionVariations,
    spacing: SpacingVariations
}

function getHeight(p: Props) {
    if (p.variation === DirectionVariations.VERTICAL) {
        return p.theme.dimension.d100;
    }

    return "1px";
}

function getWidth(p: Props) {
    if (p.variation === DirectionVariations.VERTICAL) {
        return px(p.theme.spacing.s1);
    }

    return p.theme.dimension.d100;
}

function getMargin(p: Props) {
    let spacing = px(p.theme.spacing.s5);

    if(p.spacing === SpacingVariations.SMALL){
        spacing = px(p.theme.spacing.s4);
    }

    if(p.spacing === SpacingVariations.LARGE){
        spacing = px(p.theme.spacing.s5);
    }

    if (p.variation === DirectionVariations.VERTICAL) {
        return `${px(p.theme.spacing.s0)} ${px(spacing)}`;
    }

    return `${px(spacing)} ${px(p.theme.spacing.s0)}`;
}

const Divider = styled.div<Props>`
  height: ${getHeight};
  width: ${getWidth};
  margin: ${getMargin};
  background: ${p => p.theme.color.light};
`;

export default Divider;