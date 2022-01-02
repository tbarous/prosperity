import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Form from "@components/form/Form";
import Button from "@components/button/Button";
import ButtonTypeEnum from "@components/button/enums/ButtonTypeEnum";

const DefaultForm = (args: any) => {
    function onSubmit() {
        console.log("Submitted!")
    }

    return (
        <StorybookWrapperStyled>
            <Form onSubmit={onSubmit}>
                <Input label="Email"/>

                <br/>

                <Input label="Password"/>

                <br/>

                <Button type={ButtonTypeEnum.SUBMIT}>Submit</Button>
            </Form>
        </StorybookWrapperStyled>
    );
}

export default DefaultForm;