import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabStyled from "./styled/tab/TabStyled";
import TabActiveStyled from "./styled/tab-active/TabActiveStyled";

interface Props extends BasicComponentProps {
    active?: boolean,
    id?: string,
    onClick?: (e: MouseEvent) => void
}

const Tab: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        active,
        id,
        onClick = () => {
        }
    } = props;

    return (
        <TabStyled
            className={className}
            onClick={onClick}
            id={id}
        >
            {children}

            {active && <TabActiveStyled/>}
        </TabStyled>
    )
}

export default Tab;