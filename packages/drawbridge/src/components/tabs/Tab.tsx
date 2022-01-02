import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabStyled from "./styled/tab/TabStyled";
import TabActiveStyled from "./styled/tab-active/TabActiveStyled";

interface Props extends BasicComponentProps {
    onClickTab?: (e: MouseEvent) => void
}

const Tab: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        onClickTab = () => {}
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