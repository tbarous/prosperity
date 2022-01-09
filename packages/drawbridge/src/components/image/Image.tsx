import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ImageStyled from "@components/image/styled/ImageStyled";
import ImageWrapperStyled from "./styled/ImageWrapperStyled";

export interface ImageUIProps {
    rounded?: boolean,
    roundedTop?: boolean,
    roundedBottom?: boolean
}

export interface ImageProps extends BasicComponentProps, ImageUIProps {
    width?: number,
    height?: number,
    src: string,
    alt: string,
}

const Image: FunctionComponent<ImageProps> = (props: ImageProps): ReactElement => {
    const {src, alt, width, height, rounded, roundedTop, roundedBottom} = props;

    const UIProps = {rounded, roundedTop: roundedTop, roundedBottom}

    return (
        <ImageWrapperStyled width={width} height={height}>
            <ImageStyled src={src} alt={alt} {...UIProps}/>
        </ImageWrapperStyled>
    )
}

export default Image;