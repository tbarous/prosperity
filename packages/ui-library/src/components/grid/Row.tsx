import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import RowWrapper from "./styled/RowWrapper";

interface Props extends BasicComponentProps {
    gutter?: number
}

const Row: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, gutter} = props;

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child) && gutter) return React.cloneElement(child, {gutter});

        return child;
    });

    return (
        <RowWrapper {...props}>
            {childrenWithProps}
        </RowWrapper>
    )
}

export default Row;