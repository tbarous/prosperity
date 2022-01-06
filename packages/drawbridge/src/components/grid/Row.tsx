import React, {cloneElement, isValidElement} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import RowStyled from "@components/grid/styled/RowStyled";

interface Props extends BasicComponentProps {
    gutter?: number
}

const Row: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, gutter, className} = props;

    const childrenWithProps = React.Children.map(children, (child) => {
        if (!isValidElement(child) || !gutter) return child;

        return cloneElement(child, {gutter: gutter % 2 === 0 ? gutter : gutter + 1});
    });

    return (
        <RowStyled
            className={className}
            gutter={gutter}
        >
            {childrenWithProps}
        </RowStyled>
    )
}

export default Row;