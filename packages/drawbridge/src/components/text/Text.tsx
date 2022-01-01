import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TextStyled from "@components/text/styled/TextStyled";

interface Props {
    bold?: boolean
}

const Text: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <TextStyled {...props}>
            {children}
        </TextStyled>
    )
}

export default Text;