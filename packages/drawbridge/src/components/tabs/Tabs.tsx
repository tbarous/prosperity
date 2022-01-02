import React, {Children, ReactNode, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabsStyled from "./styled/tabs/TabsStyled";
import TabActiveStyled from "./styled/tab-active/TabActiveStyled";

export interface TabsProps extends BasicComponentProps {
    onChange: (index: number) => void,
    initialActive?: number
}

const Tabs: React.FunctionComponent<TabsProps> = (props: TabsProps): ReactElementOrNull => {
    const {
        children,
        className,
        initialActive = 0,
        onChange = () => {
        }
    } = props;

    const [active, setActive] = useState(initialActive);

    function onClickTab(index: number) {
        setActive(index);

        onChange(index);
    }

    const width = 100 / Children.count(children)

    return (
        <TabsStyled
            className={className}
        >
            {Children.map(children, (child: ReactNode, index: number) => {
                return React.isValidElement(child) && React.cloneElement(child, {onClickTab: () => onClickTab(index)})
            })}

            <TabActiveStyled
                width={width}
                left={active * 100}
            />
        </TabsStyled>
    )
}

export default Tabs;