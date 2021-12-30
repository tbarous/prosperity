import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import RowStyled from "./styled/RowStyled";

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
        <RowStyled {...props}>
            {childrenWithProps}
        </RowStyled>
    )
}

export default Row;