import React, {ReactNode} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabsStyled from "./styled/tabs/TabsStyled";

export interface TabsProps extends BasicComponentProps {
}

const Tabs: React.FunctionComponent<TabsProps> = (props: TabsProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <TabsStyled
            className={className}
        >
            {children}
        </TabsStyled>
    )
}

export default Tabs;