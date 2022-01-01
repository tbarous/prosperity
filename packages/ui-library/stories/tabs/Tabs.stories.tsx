import React, {useState} from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import {Props} from "@components/image/Image";
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {},
};

const DefaultButtonTemplate = (args: Props) => {
    const [active, setActive] = useState("1");

    function onClick(e: any){
        setActive(e.target.id)
    }

    return (
        <StorybookWrapperStyled>
            <Tabs {...args}>
                <Tab id="1" onClick={onClick} active={active === "1"}>Tab 1</Tab>
                <Tab id="2" onClick={onClick} active={active === "2"}>Tab 2</Tab>
                <Tab id="3" onClick={onClick} active={active === "3"}>Tab 3</Tab>
                <Tab id="4" onClick={onClick} active={active === "4"}>Tab 4</Tab>
            </Tabs>

            {active === "1" ? <Card>Tab 1 Content</Card> : null}
            {active === "2" ? <Card>Tab 2 Content</Card> : null}
            {active === "3" ? <Card>Tab 3 Content</Card> : null}
            {active === "4" ? <Card>Tab 4 Content</Card> : null}
        </StorybookWrapperStyled>
    )
};

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {};