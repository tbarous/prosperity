import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import {BasicComponentProps} from "@typings";
import ListItemStyled from "./styled/ListItemStyled";

interface ListItemProps extends BasicComponentProps {}

const ListItem: FunctionComponent<ListItemProps> = (props: ListItemProps): ReactElement => {
    const {children, className} = props;

    return (
        <ListItemStyled className={className}>
            {children}
        </ListItemStyled>
    )
}

export default ListItem;