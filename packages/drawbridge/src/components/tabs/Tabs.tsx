import React, {Children, ReactNode, useEffect, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabsStyled from "./styled/tabs/TabsStyled";
import TabActiveStyled from "./styled/tab-active/TabActiveStyled";

export interface TabsProps extends BasicComponentProps {
    onChange: (index: number) => void,
    activate?: number,
    speed?: number
}

const Tabs: React.FunctionComponent<TabsProps> = (props: TabsProps): ReactElementOrNull => {
    const {
        children,
        className,
        activate,
        speed = 1,
        onChange = () => {
        }
    } = props;

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (typeof activate === "number") {
            setActive(activate);
        }
    }, [activate])

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
                speed={speed}
            />
        </TabsStyled>
    )
}

export default Tabs;