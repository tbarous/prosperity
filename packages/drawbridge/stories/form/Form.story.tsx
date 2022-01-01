import React from "react";
import Input from "@components/form/Input";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Form from "@components/form/Form";
import Button from "@components/button/Button";
import TypeEnum from "@components/button/enums/TypeEnum";

const InputStory = (args: any) => {
    function onSubmit() {
        alert("submitted")
    }

    return (
        <StorybookWrapperStyled>
            <Form onSubmit={onSubmit}>
                <Input label="Email"/>

                <br/>

                <Input label="Password"/>

                <br/>

                <Button type={TypeEnum.SUBMIT}>Submit</Button>
            </Form>
        </StorybookWrapperStyled>
    );
}

export default InputStory;