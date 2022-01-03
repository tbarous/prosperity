import React from "react";
import Input from "@components/form/Input";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import Radio from "@components/form/Radio";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultRadio = (args: any) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Radio {...args} />
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

DefaultRadio.args = {
    label: "Label"
};

export default DefaultRadio;