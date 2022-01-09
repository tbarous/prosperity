import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import ListStyled from "./styled/ListStyled";
import {BasicComponentProps} from "@typings";

interface ListProps extends BasicComponentProps {}

const List: FunctionComponent<ListProps> = (props: ListProps): ReactElement => {
    const {children, className} = props;

    return (
        <ListStyled className={className}>
            {children}
        </ListStyled>
    )
}

export default List;