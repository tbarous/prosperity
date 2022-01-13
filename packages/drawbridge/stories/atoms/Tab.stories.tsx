import React, {ReactNode} from 'react';
import TabComponent from "@atoms/Tab";

export default {
    title: 'Design System/Atoms/Tab',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Tab = (args: {}) => {
    return (
        <TabComponent>Tab</TabComponent>
    )
};

Tab.args = {
    children: "Tab"
};

export {
    Tab
}