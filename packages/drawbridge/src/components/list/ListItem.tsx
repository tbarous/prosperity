import React, {ReactNode} from "react";
import {BasicComponentProps} from "@typings";
import ListItemStyled from "./styled/ListItemStyled";

interface Props extends BasicComponentProps{

}

const ListItem: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <ListItemStyled className={className}>
            {children}
        </ListItemStyled>
    )
}

export default ListItem;