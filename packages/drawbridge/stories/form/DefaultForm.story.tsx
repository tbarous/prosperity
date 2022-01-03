import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Form from "@components/form/Form";
import Button from "@components/button/Button";
import ButtonTypeEnum from "@components/button/enums/ButtonTypeEnum";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";

const DefaultForm = (args: any) => {
    function onSubmit() {
        console.log("Submitted!")
    }

    return (
        <StorybookWrapperStyled>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <Form onSubmit={onSubmit}>
                            <Input label="Email"/>

                            <br/>

                            <Input label="Password"/>

                            <br/>

                            <Button type={ButtonTypeEnum.SUBMIT}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </StorybookWrapperStyled>
    );
}

export default DefaultForm;