import React from "react";
import ImageStyled from "./styled/ImageStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ImageWrapperStyled from "./styled/ImageWrapperStyled";

export interface Props extends BasicComponentProps {
    width?: number,
    height?: number,
    src: string,
    alt: string
}

const Image: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {src, alt, width, height} = props;

    const wrapperProps = {width, height};

    const imageProps = {src, alt}

    return (
        <ImageWrapperStyled {...wrapperProps}>
            <ImageStyled {...imageProps}/>
        </ImageWrapperStyled>
    )
}

export default Image;