import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ContainerStyled from "./styled/container/ContainerStyled";

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className, fluid} = props;

    return (
        <ContainerStyled
            className={className}
            fluid={fluid}
        >
            {children}
        </ContainerStyled>
    )
}

export default Container;