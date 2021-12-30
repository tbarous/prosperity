import React from 'react';
import styled from "styled-components";
import StorybookWrapper from "../StorybookWrapper";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Theme from "@theme/interfaces";

export default {
    title: 'Grid',
    component: Container,
    argTypes: {
        container: {
            options: ['default', 'fluid'],
            control: {type: 'radio'},
        },
    },
};

const ColContent = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.primary};
  padding: 1rem;
  border: 1px solid;
  text-align: center;
`;

const GridTemplate = (args: any) => {
    const {container} = args;

    const fluid = container === "fluid";

    return (
        <StorybookWrapper>
            <Container fluid={fluid}>
                <Row>
                    <Col xs={8}>
                        <ColContent>
                            8/12
                        </ColContent>
                    </Col>

                    <Col xs={1}>
                        <ColContent>
                            1/12
                        </ColContent>
                    </Col>

                    <Col xs={1}>
                        <ColContent>
                            1/12
                        </ColContent>
                    </Col>

                    <Col xs={2}>
                        <ColContent>
                            2/12
                        </ColContent>
                    </Col>
                </Row>

                <br/>

                <Row gutter={6}>
                    <Col sm={12} lg={6}>
                        <ColContent>
                            6/12
                        </ColContent>
                    </Col>

                    <Col sm={12} lg={6}>
                        <ColContent>
                            6/12
                        </ColContent>
                    </Col>
                </Row>

                <br/>

                <Row gutter={12}>
                    <Col sm={12} lg={4}>
                        <ColContent>
                            4/12
                        </ColContent>
                    </Col>

                    <Col sm={12} lg={4}>
                        <ColContent>
                            4/12
                        </ColContent>
                    </Col>

                    <Col sm={12} lg={4}>
                        <ColContent>
                            4/12
                        </ColContent>
                    </Col>
                </Row>
            </Container>
        </StorybookWrapper>
    )
};

export const Default: any = GridTemplate.bind({});

Default.args = {
    container: 'default'
};