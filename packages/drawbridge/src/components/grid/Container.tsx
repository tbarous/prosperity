import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ContainerStyled from "@components/grid/styled/ContainerStyled";

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
        children,
        className,
        fluid
    } = props;

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