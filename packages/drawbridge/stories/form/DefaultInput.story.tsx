import React from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultInput = (args: any) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Input {...args} />
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

DefaultInput.args = {
    label: "Label"
};

export default DefaultInput;