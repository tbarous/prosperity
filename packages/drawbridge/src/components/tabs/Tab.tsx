import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabStyled from "./styled/tab/TabStyled";
import TabActiveStyled from "./styled/tab-active/TabActiveStyled";

interface Props extends BasicComponentProps {
    active?: boolean,
    onClick?: any,
    id?: string
}

const Tab: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        active
    } = props;

    return (
        <TabStyled
            className={className}
        >
            {children}

            {active && <TabActiveStyled/>}
        </TabStyled>
    )
}

export default Tab;