import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ContainerStyled from "./styled/ContainerStyled";

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <ContainerStyled {...props}>
            {children}
        </ContainerStyled>
    )
}

export default Container;