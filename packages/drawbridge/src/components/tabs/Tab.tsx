import React, {ReactElement, ReactNode} from "react";
import TabStyled from "@components/tabs/styled/TabStyled";
import {fn} from "@helpers";

interface TabProps {
    children: ReactNode,
    className?: string,
    onClickTab?: (e: MouseEvent) => void
}

const Tab: React.FunctionComponent<TabProps> = (props: TabProps): ReactElement => {
    const {
        children,
        className,
        onClickTab = fn
    } = props;

    return (
        <TabStyled
            className={className}
            onClick={onClickTab}
        >
            {children}
        </TabStyled>
    )
}

export default Tab;