import React, {Children, ReactElement, ReactNode, useEffect, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import TabsStyled from "@components/tabs/styled/TabsStyled";
import TabActiveStyled from "@components/tabs/styled/TabActiveStyled";
import {fn} from "@helpers";
import {clone} from "@utils/ComponentUtils";

export interface TabsProps {
    children: ReactNode,
    className?: string,
    onChange: (index: number) => void,
    activate?: number,
}

const Tabs: React.FunctionComponent<TabsProps> = (props: TabsProps): ReactElement => {
    const {
        children,
        className,
        activate,
        onChange = fn
    } = props;

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (typeof activate === "number") setActive(activate);
    }, [activate])

    const width = 100 / Children.count(children);

    function onClickTab(index: number) {
        setActive(index);

        onChange(index);
    }

    return (
        <TabsStyled
            className={className}
        >
            {Children.map(children, (child: ReactNode, index: number) => clone(child, {onClickTab: () => onClickTab(index)}))}

            <TabActiveStyled
                width={width}
                left={active * 100}
            />
        </TabsStyled>
    )
}

export default Tabs;