import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";

const DefaultCheckbox = (args: any) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <Checkbox {...args} />
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

DefaultCheckbox.args = {
    label: "Label"
};

export default DefaultCheckbox;