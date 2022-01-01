import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericComponents";
import {Props} from "@components/image/Image";
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {},
};

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapperStyled>
        <Tabs {...args}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
        </Tabs>
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {

};