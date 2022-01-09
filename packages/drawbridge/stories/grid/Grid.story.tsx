import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

const ColStyled = styled(Col)`background: ${(p: StyledProps) => p.theme.color.primary}; padding: ${(p: StyledProps) => px(p.theme.spacing.s4)};`

const DefaultGrid = (args: { fluid: boolean }) => {
    const {fluid} = args;

    return (
        <Container fluid={fluid}>
            <Row>
                <ColStyled>8/12</ColStyled>
                <ColStyled>1/12</ColStyled>
                <ColStyled>1/12</ColStyled>
                <ColStyled>2/12</ColStyled>
            </Row>

            <br/>

            <Row gutter={20}>
                <ColStyled sm={12} lg={6}>6/12</ColStyled>
                <ColStyled sm={12} lg={6}>6/12</ColStyled>
            </Row>
        </Container>
    )
};

DefaultGrid.args = {
    fluid: false
};

export default DefaultGrid;