import React, {FunctionComponent, ReactElement} from "react";
import TabStyled from "@components/tabs/styled/TabStyled";
import {BasicComponentProps} from "@typings";

export interface TabProps extends BasicComponentProps {
    onClickTab?: (e: MouseEvent) => void
}

const Tab: FunctionComponent<TabProps> = (props: TabProps): ReactElement => {
    const {children, className, onClickTab} = props;

    return (
        <TabStyled className={className} onClick={onClickTab}>
            {children}
        </TabStyled>
    )
}

export default Tab;