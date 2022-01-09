import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import TextStyled from "@components/text/styled/TextStyled";
import {BasicComponentProps} from "@typings";

export interface TextProps extends BasicComponentProps {
    bold?: boolean
}

const Text: FunctionComponent<TextProps> = (props: TextProps): ReactElement => {
    const {children, className, bold} = props;

    return (
        <TextStyled className={className} bold={bold}>
            {children}
        </TextStyled>
    )
}

export default Text;