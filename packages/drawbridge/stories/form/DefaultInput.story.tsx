import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

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