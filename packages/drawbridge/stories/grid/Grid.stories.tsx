import React from 'react';
import {StorybookColContent, StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

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

const GridTemplate = (args: any) => {
    const {container} = args;

    const isFluid = container === "fluid";

    return (
        <StorybookWrapperStyled>
            <Container fluid={isFluid}>
                <Row>
                    <Col>
                        <StorybookColContent bold>
                            8/12
                        </StorybookColContent>
                    </Col>

                    <Col>
                        <StorybookColContent>1/12</StorybookColContent>
                    </Col>

                    <Col>
                        <StorybookColContent>
                            1/12
                        </StorybookColContent>
                    </Col>

                    <Col>
                        <StorybookColContent>
                            2/12
                        </StorybookColContent>
                    </Col>
                </Row>

                <br/>

                <Row gutter={20}>
                    <Col sm={12} lg={6}>
                        <StorybookColContent>
                            6/12
                        </StorybookColContent>
                    </Col>

                    <Col sm={12} lg={6}>
                        <StorybookColContent>
                            6/12
                        </StorybookColContent>
                    </Col>
                </Row>

                <br/>

                <Row gutter={12}>
                    <Col sm={12} lg={4}>
                        <StorybookColContent>
                            4/12
                        </StorybookColContent>
                    </Col>

                    <Col sm={12} lg={4}>
                        <StorybookColContent>
                            4/12
                        </StorybookColContent>
                    </Col>

                    <Col sm={12} lg={4}>
                        <StorybookColContent>
                            4/12
                        </StorybookColContent>
                    </Col>
                </Row>
            </Container>
        </StorybookWrapperStyled>
    )
};

export const Default: any = GridTemplate.bind({});

Default.args = {
    container: 'default'
};