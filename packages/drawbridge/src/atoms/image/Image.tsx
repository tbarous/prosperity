import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ImageStyled from "@atoms/image/styled/ImageStyled";
import ImageWrapperStyled from "./styled/ImageWrapperStyled";

export interface ImageUIProps {
    rounded?: boolean,
    roundedTop?: boolean,
    roundedBottom?: boolean,
    circle?: boolean
}

export interface ImageProps extends BasicComponentProps, ImageUIProps {
    width?: number,
    height?: number,
    src: string,
    alt: string
}

const Image: FunctionComponent<ImageProps> = (props: ImageProps): ReactElement => {
    const {src, alt, width, height, rounded, roundedTop, roundedBottom, circle} = props;

    const UIProps = {rounded, roundedTop: roundedTop, roundedBottom, circle}

    return (
        <ImageWrapperStyled width={width} height={height}>
            <ImageStyled src={src} alt={alt} {...UIProps}/>
        </ImageWrapperStyled>
    )
}

export default Image;