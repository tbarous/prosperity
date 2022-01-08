import React, {ReactElement, ReactNode} from "react";
import ContainerStyled from "@components/grid/styled/ContainerStyled";

export interface T {
    children: ReactNode,
    className?: string,
    fluid?: boolean
}

const Container: React.FunctionComponent<T> = (props: T): ReactElement => {
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