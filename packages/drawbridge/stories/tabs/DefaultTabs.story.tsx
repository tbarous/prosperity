import React, {useEffect, useState} from 'react';
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";
import {TabsProps} from "@components/tabs/Tabs";
import styled from "styled-components";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import CarouselItems from "@components/carousel/CarouselItems";
import CarouselItem from "@components/carousel/CarouselItem";
import Carousel from "@components/carousel/Carousel";

const CardStyled = styled(Card)`
  padding: 2rem;
  height: 120px;
`;

const TabStyled = styled(Tab)`
`;

const DefaultTabs = (args: TabsProps) => {
    const [active, setActive] = useState<any>(0);

    function onChange(index: number) {
        setActive(index)
    }

    useEffect(() => {
        if (typeof args.activate === "number") {
            onChange(args.activate - 1);
        }
    }, [args.activate])

    const [tabs, setTabs] = useState<any>([
        "Tab 1",
        "Tab 2",
        "Tab 3",
        "Tab 4"
    ]);

    const [content, setContent] = useState<any>([
        `Content 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut, cumque doloremque, excepturi
        exercitationem explicabo facilis hic ipsum iure magni natus, pariatur quaerat quasi ratione reiciendis sed
        veritatis voluptatem.`,
        `Content 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut, cumque doloremque, excepturi
        exercitationem explicabo facilis hic ipsum iure magni natus, pariatur quaerat quasi ratione reiciendis sed
        veritatis voluptatem.`,
        `Content 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut, cumque doloremque, excepturi
        exercitationem explicabo facilis hic ipsum iure magni natus, pariatur quaerat quasi ratione reiciendis sed
        veritatis voluptatem.`,
        `Content 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut, cumque doloremque, excepturi
        exercitationem explicabo facilis hic ipsum iure magni natus, pariatur quaerat quasi ratione reiciendis sed
        veritatis voluptatem.`,
    ]);

    return (
        <Container fluid>
            <Row>
                <Col xs={8}>
                    <div style={{height: "60px"}}>
                        <Tabs onChange={onChange} activate={active}>
                            {tabs.map((tab: any, index: number) => <TabStyled key={index}>{tab}</TabStyled>)}
                        </Tabs>

                        <CardStyled>
                            <Carousel change={active} itemsPerSlide={1}>
                                <CarouselItems>
                                    {content.map((c: any, index: number) => (
                                        <CarouselItem key={index}>
                                            {c}
                                        </CarouselItem>
                                    ))}
                                </CarouselItems>
                            </Carousel>
                        </CardStyled>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

DefaultTabs.args = {
    activate: 1
};

export default DefaultTabs;