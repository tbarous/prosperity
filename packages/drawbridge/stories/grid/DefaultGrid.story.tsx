import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import {TextStyledProps} from "@components/text/styled/TextStyled";
import Text from "@components/text/Text";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const StorybookColContent = styled(Text)<TextStyledProps>`
  background-color: ${(props: TextStyledProps) => props.theme.color.primary};
  padding: 1rem;
  text-align: center;
  color: white;
`;

const DefaultGrid = (args: any) => {
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

DefaultGrid.args = {
    container: 'default'
};

export default DefaultGrid;