import React, {ReactNode} from 'react';
import Tab from "@atoms/tab/Tab";

const DefaultTabs = (args: { children: ReactNode }) => {
    return (
        <Tab>{args.children}</Tab>
    )
};

DefaultTabs.args = {
    children: "Tab"
};

export default DefaultTabs;