import React from 'react';
import Container from "@atoms/container/Container";
import Row from "@atoms/row/Row";
import Col from "@atoms/col/Col";
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

const Item = styled.div`
  padding: ${(p: StyledProps) => px(p.theme.spacing.s3)};
  background: ${(p: StyledProps) => p.theme.color.primary};
  color: ${(p: StyledProps) => p.theme.color.surface};
`

const DefaultGrid = (args: { fluid: boolean, gutter: number }) => {
    const {fluid, gutter} = args;

    return (
        <Container fluid={fluid}>
            <Row gutter={gutter}>
                <Col xs={2}><Item>11</Item></Col>
                <Col xs={4}><Item>11</Item></Col>
                <Col xs={4}><Item>11</Item></Col>
            </Row>
        </Container>
    )
};

DefaultGrid.args = {
    fluid: false,
    gutter: 10
};

export default DefaultGrid;