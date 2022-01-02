import React, {useEffect, useState} from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";
import {TabsProps} from "@components/tabs/Tabs";
import styled from "styled-components";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

const CardStyled = styled(Card)`
  padding: 2rem;
`;

const DefaultTabs = (args: TabsProps) => {
    const [active, setActive] = useState("1");

    function onClick(e: any) {
        console.log(e.target.id)
        setActive(e.target.id)
    }

    const [tabs, setTabs] = useState<any>([]);
    const [content, setContent] = useState<any>([]);

    useEffect(() => {
        const t = [];
        const c = [];
        for (let i = 1; i < 5; i++) {
            t.push({id: i, text: `Tab ${i}`});
            c.push({
                tabId: i, text: `Content of tab ${i}: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in incidunt rerum soluta vel. Alias
            architecto autem inventore iure laborum, maxime nesciunt placeat quae? Aut dolores esse explicabo odio
            veritatis.`
            })
        }

        setTabs(t);
        setContent(c)
    }, [])

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <div style={{height: "60px"}}>
                            <Tabs {...args}>
                                {tabs.map((tab: any) => (
                                    <Tab
                                        key={tab.id}
                                        id={tab.id}
                                        onClick={onClick}
                                        active={tab.id.toString() === active}
                                    >
                                        {tab.text}
                                    </Tab>
                                ))}
                            </Tabs>

                            <CardStyled>
                                {content.map((c: any) => c.tabId.toString() === active ? c.text : null)}
                            </CardStyled>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StorybookWrapperStyled>
    )
};

DefaultTabs.args = {
    active: "1"
};

export default DefaultTabs;