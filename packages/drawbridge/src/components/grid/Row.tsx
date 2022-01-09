import React, {Children, FunctionComponent, ReactElement, ReactNode} from "react";
import {BasicComponentProps} from "@typings";
import RowStyled from "@components/grid/styled/RowStyled";
import {clone} from "@utils/ComponentUtils";

export interface RowProps extends BasicComponentProps {
    gutter?: number
}

const Row: FunctionComponent<RowProps> = (props: RowProps): ReactElement => {
    const {children, gutter, className} = props;

    const eventGutter = gutter ? (gutter % 2 === 0 ? gutter : gutter + 1) : 0;

    return (
        <RowStyled className={className} gutter={gutter}>
            {!gutter ? children : Children.map(children, (child: ReactNode) => clone(child, {gutter: eventGutter}))}
        </RowStyled>
    )
}

export default Row;