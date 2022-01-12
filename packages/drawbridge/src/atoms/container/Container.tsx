import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import ContainerStyled from "@atoms/container/styled/ContainerStyled";
import {BasicComponentProps} from "@typings";

export interface ContainerProps extends BasicComponentProps {
    fluid?: boolean
}

const Container: FunctionComponent<ContainerProps> = (props: ContainerProps): ReactElement => {
    const {children, className, fluid} = props;

    return (
        <ContainerStyled className={className} fluid={fluid}>
            {children}
        </ContainerStyled>
    )
}

export default Container;