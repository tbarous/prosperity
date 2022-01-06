import React, {ReactNode} from "react";
import ListStyled from "./styled/ListStyled";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps{
}

const List: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;

    return (
        <ListStyled className={className}>
            {children}
        </ListStyled>
    )
}

export default List;