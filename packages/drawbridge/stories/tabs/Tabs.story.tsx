import React, {useEffect, useState} from 'react';
import Tabs from "@components/tabs/Tabs";
import Tab from "@components/tabs/Tab";
import Card from "@components/card/Card";
import {TabsProps} from "@components/tabs/Tabs";
import styled from "styled-components";
import CarouselItems from "@components/carousel/CarouselItems";
import CarouselItem from "@components/carousel/CarouselItem";
import Carousel from "@components/carousel/Carousel";

const CardStyled = styled(Card)`
  padding: 2rem;
  height: 120px;
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

    const [tabs, setTabs] = useState<any>(["Tab 1", "Tab 2", "Tab 3", "Tab 4"]);

    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aut, cumque doloremque, excepturi
        exercitationem explicabo facilis hic ipsum iure magni natus, pariatur quaerat quasi ratione reiciendis sed
        veritatis voluptatem.`;

    const [content, setContent] = useState<any>([
        `Content 1: ${text}`,
        `Content 2: ${text}`,
        `Content 3: ${text}`,
        `Content 4: ${text}`,
    ]);

    return (
        <>
            <Tabs onChange={onChange} activate={active}>
                {tabs.map((tab: any, index: number) => <Tab key={index}>{tab}</Tab>)}
            </Tabs>

            <CardStyled>
                <Carousel items={1}>
                    <CarouselItems>
                        {content.map((c: any, index: number) => (
                            <CarouselItem key={index}>
                                {c}
                            </CarouselItem>
                        ))}
                    </CarouselItems>
                </Carousel>
            </CardStyled>
        </>
    )
};

DefaultTabs.args = {
    activate: 1
};

export default DefaultTabs;