import React from 'react';
import styled from "styled-components";
import StorybookWrapper from "../StorybookWrapper";
import Container from "../../components/grid/Container";
import Row from "../../components/grid/Row";
import Col from "../../components/grid/Col";

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

const StyledCol = styled(Col)`
  border: 1px solid;
  background-color: cyan;
  padding: 1rem;
`;

const GridTemplate = (args: any) => {
    const {container} = args;

    const fluid = container === "fluid";

    return (
        <StorybookWrapper>
            <Container fluid={fluid}>
                <Row>
                    <StyledCol xs={1}>1 1/4 Column</StyledCol>
                    <StyledCol xs={1}>1 1/4 Column</StyledCol>
                    <StyledCol xs={1}>1 1/4 Column</StyledCol>
                    <StyledCol xs={1}>1 1/4 Column</StyledCol>
                </Row>

                <br/>

                <Row>
                    <StyledCol sm={12} lg={6}>Half LG | Full SM</StyledCol>
                    <StyledCol sm={12} lg={6}>Half LG | Full SM</StyledCol>
                </Row>
            </Container>
        </StorybookWrapper>
    )
};

export const Default: any = GridTemplate.bind({});

Default.args = {
    container: 'default'
};