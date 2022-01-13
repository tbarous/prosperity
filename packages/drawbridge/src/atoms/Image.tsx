import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

interface ImageProps extends StyledProps {borderRadius?: BorderRadiusVariations}

export enum BorderRadiusVariations {
    ROUNDED = "rounded",
    ROUNDED_TOP = "rounded-top",
    ROUNDED_BOTTOM = "rounded-bottom",
    CIRCLE = "circle"
}

function getBorderRadiusTop(p: ImageProps) {
    if (p.borderRadius === BorderRadiusVariations.CIRCLE) {
        return p.theme.borderRadius.circle;
    }

    if (p.borderRadius === BorderRadiusVariations.ROUNDED || p.borderRadius === BorderRadiusVariations.ROUNDED_TOP) {
        return p.theme.borderRadius.medium;
    }

    return p.theme.borderRadius.none;
}

function getBorderRadiusBottom(p: ImageProps) {
    if (p.borderRadius === BorderRadiusVariations.CIRCLE) {
        return p.theme.borderRadius.circle;
    }

    if (p.borderRadius === BorderRadiusVariations.ROUNDED || p.borderRadius === BorderRadiusVariations.ROUNDED_BOTTOM) {
        return p.theme.borderRadius.medium;
    }

    return p.theme.borderRadius.none;
}

const ImageStyled = styled.img<ImageProps>`
  object-fit: ${p => p.theme.objectFit.cover};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  border-top-left-radius: ${getBorderRadiusTop};
  border-top-right-radius: ${getBorderRadiusTop};
  border-bottom-left-radius: ${getBorderRadiusBottom};
  border-bottom-right-radius: ${getBorderRadiusBottom};
`;

const Wrapper = styled.div<{ width?: number, height?: number }>`
  display: ${p => p.theme.display.flex};
  width: ${p => px(p.height) || p.theme.dimension.d100};
  height: ${p => px(p.width) || p.theme.dimension.d100};
`;

interface Props extends BasicComponentProps {
    width?: number,
    height?: number,
    src: string,
    alt: string,
    borderRadius?: BorderRadiusVariations
}

const Image: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {src, alt, width, height, borderRadius} = props;

    return (
        <Wrapper width={width} height={height}>
            <ImageStyled src={src} alt={alt} borderRadius={borderRadius}/>
        </Wrapper>
    )
}

export default Image;