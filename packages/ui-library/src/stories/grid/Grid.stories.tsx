import React from 'react';
import StorybookWrapper from "../StorybookWrapper";
import Container from "../../components/grid/Container";
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";
import styled from "styled-components";

export default {
    title: 'Grid',
    component: Container,
};

const StyledCol = styled(Col)`
  border: 1px solid;
  background-color: cyan;
`;

const GridTemplate = (args: any) => (
    <StorybookWrapper>
        <Container {...args}>
            <Row>
                <StyledCol grow={1}>Col 1</StyledCol>
                <StyledCol grow={2}>Col 2</StyledCol>
                <StyledCol grow={1}>Col 3</StyledCol>
            </Row>
        </Container>
    </StorybookWrapper>
);

export const Default: any = GridTemplate.bind({});

Default.args = {};