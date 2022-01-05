import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import TextStyled from "@components/text/styled/TextStyled";

export interface TextProps extends BasicComponentProps {
    bold?: boolean
}

const Text: React.FunctionComponent<TextProps> = (props: TextProps): ReactElement => {
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