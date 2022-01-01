import React from "react";
import TabStyled from "./styled/TabStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

interface Props extends BasicComponentProps {
    active?: boolean,
    onClick?: any,
    id?: string
}

const Tab: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className, active} = props;

    return (
        <TabStyled {...props}>
            {children}
        </TabStyled>
    )
}

export default Tab;