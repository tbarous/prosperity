import React, {ReactElement, ReactNode} from "react";
import TextStyled from "@components/text/styled/TextStyled";

interface T {
    children: ReactNode,
    className?: string,
    bold?: boolean
}

const Text: React.FunctionComponent<T> = (props: T): ReactElement => {
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