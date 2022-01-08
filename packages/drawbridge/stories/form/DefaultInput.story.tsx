import React from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

const DefaultInput = (args: { label?: string }) => (
    <Container fluid>
        <Row>
            <Col xs={4}>
                <Input label={args.label}/>
            </Col>
        </Row>
    </Container>
);

DefaultInput.args = {
    label: "Label"
};

export default DefaultInput;