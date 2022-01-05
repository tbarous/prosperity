import React, {ReactElement} from "react";
import TextStyled from "@components/text/styled/TextStyled";
import T from "@components/text/TextProps";

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