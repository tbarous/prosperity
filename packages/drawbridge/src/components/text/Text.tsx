import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TextStyled from "@components/text/styled/TextStyled";

interface TextProps extends BasicComponentProps{
    bold?: boolean
}

const Text: React.FunctionComponent<TextProps> = (props: TextProps): ReactElementOrNull => {
    const {
        children,
        className,
        bold
    } = props;

    return (
        <TextStyled
            className={className}
            bold={bold}
        >
            {children}
        </TextStyled>
    )
}

export default Text;