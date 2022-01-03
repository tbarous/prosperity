import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Checkbox from "@components/form/Checkbox";
import Radio from "@components/form/Radio";

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