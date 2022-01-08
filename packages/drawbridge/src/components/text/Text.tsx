import React, {ReactElement, ReactNode} from "react";
import TextStyled from "@components/text/styled/TextStyled";

export interface TextProps {
    children: ReactNode,
    className?: string,
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