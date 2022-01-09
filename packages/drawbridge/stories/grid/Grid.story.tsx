import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";
import {StyledProps} from "@typings";

const ColStyled = styled(Col)`background: ${(p: StyledProps) => p.theme.color.primary}; `

const DefaultGrid = (args: { fluid: boolean, gutter: number }) => {
    const {fluid, gutter} = args;

    return (
        <Container fluid={fluid}>
            <Row gutter={gutter}>
                <ColStyled>8/12</ColStyled>
                <ColStyled>1/12</ColStyled>
                <ColStyled>1/12</ColStyled>
                <ColStyled>2/12</ColStyled>
            </Row>
        </Container>
    )
};

DefaultGrid.args = {
    fluid: false,
    gutter: 10
};

export default DefaultGrid;