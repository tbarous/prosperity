import React from "react";
import Input from "@components/form/Input";
import Form from "@components/form/Form";
import Button, {ButtonTypeEnum} from "@components/button/Button";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

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