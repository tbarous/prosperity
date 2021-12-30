import React from 'react';
import {StorybookWrapperStyled} from "../StorybookWrapper";
import Card from "@components/card/Card";
import {BasicComponentProps} from "@typings";
import styled from "styled-components";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

export default {
    title: 'Card',
    component: Card,
    argTypes: {},
};

const CardStyled = styled(Card)`
  padding: 1rem;
`;

const DefaultButtonTemplate = (args: BasicComponentProps) => (
    <StorybookWrapperStyled>
        <Container>
            <Row gutter={14}>
                <Col xs={4}>
                    <CardStyled {...args}>
                        {args.children}
                    </CardStyled>
                </Col>

                <Col xs={4}>
                    <CardStyled {...args}>
                        {args.children}
                    </CardStyled>
                </Col>

                <Col xs={4}>
                    <CardStyled {...args}>
                        {args.children}
                    </CardStyled>
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    children: <>
        <div style={{width: "100%"}}>
            <img src="/img.jpg" alt="img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
        </div>

        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam dolore eaque error
            exercitationem ipsam, laborum nulla numquam placeat rem suscipit voluptatum. Alias error id iusto molestiae
            nulla quibusdam velit! Alias, aliquid aperiam atque beatae dicta doloribus, error eveniet iste itaque labore
            nesciunt perspiciatis quae quas repellat reprehenderit sapiente sit.
        </div>
    </>
};