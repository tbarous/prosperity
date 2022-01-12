import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import ListStyled from "@molecules/list/styled/ListStyled";
import {BasicComponentProps} from "@typings";
import ListItem from "@atoms/list-item/ListItem";

interface ListProps extends BasicComponentProps {
    items: any[]
}

const List: FunctionComponent<ListProps> = (props: ListProps): ReactElement => {
    const {children, className, items} = props;

    return (
        <ListStyled className={className}>
            {items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </ListStyled>
    )
}

export default List;