import React from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";

const DefaultInput = (args: any) => (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Input {...args} />
                </Col>
            </Row>
        </Container>
);

DefaultInput.args = {
    label: "Label"
};

export default DefaultInput;