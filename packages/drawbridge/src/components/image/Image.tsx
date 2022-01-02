import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ImageWrapperStyled from "./styled/image-wrapper/ImageWrapperStyled";
import ImageStyled from "./styled/image/ImageStyled";

export interface Props extends BasicComponentProps {
    width?: number,
    height?: number,
    src: string,
    alt: string,
    rounded?: boolean,
    "rounded-top"?: boolean,
    "rounded-bottom"?: boolean
}

const Image: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        src,
        alt,
        width,
        height,
        rounded
    } = props;

    return (
        <ImageWrapperStyled
            width={width}
            height={height}
        >
            <ImageStyled
                src={src}
                alt={alt}
                rounded={rounded}
                roundedTop={props["rounded-top"]}
                roundedBottom={props["rounded-bottom"]}
            />
        </ImageWrapperStyled>
    )
}

export default Image;