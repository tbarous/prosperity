import React, {Children, FunctionComponent, ReactElement, ReactNode} from "react";
import {BasicComponentProps} from "@typings";
import RowStyled from "@atoms/row/styled/RowStyled";
import {clone} from "@utils/ComponentUtils";

export interface RowProps extends BasicComponentProps {
    gutter?: number
}

const Row: FunctionComponent<RowProps> = (props: RowProps): ReactElement => {
    const {children, gutter, className} = props;

    const evenGutter = gutter ? (gutter % 2 === 0 ? gutter : gutter + 1) : 0;

    const count = Children.count(children);

    return (
        <RowStyled className={className} gutter={gutter}>
            {!gutter ? children : Children.map(children, (child: ReactNode) => clone(child, {gutter: evenGutter, count}))}
        </RowStyled>
    )
}

export default Row;