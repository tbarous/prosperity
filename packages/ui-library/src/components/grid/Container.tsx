import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ContainerWrapper from "./styled/ContainerWrapper";

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <ContainerWrapper {...props}>
            {children}
        </ContainerWrapper>
    )
}

export default Container;