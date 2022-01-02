import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import RowStyled from "@components/grid/styled/RowStyled";

interface Props extends BasicComponentProps {
    gutter?: number
}

const Row: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, gutter} = props;

    const childrenWithProps = React.Children.map(children, (child) => {
        const shouldEnhanceProps = React.isValidElement(child) && gutter;

        if (!shouldEnhanceProps) return child;

        if (gutter % 2 !== 0) {
            console.error("Gutter must be even.");

            return child;
        }

        return React.cloneElement(child, {gutter});
    });

    return (
        <RowStyled {...props}>
            {childrenWithProps}
        </RowStyled>
    )
}

export default Row;