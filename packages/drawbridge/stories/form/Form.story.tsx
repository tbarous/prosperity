import React from "react";
import Input from "@components/form/Input";
import Form from "@components/form/Form";
import Button, {ButtonTypes} from "@components/button/Button";

const DefaultForm = (args: any) => {
    function onSubmit() {
        console.log("Submitted!")
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input label="Email"/>
            <Input label="Password"/>
            <Button type={ButtonTypes.SUBMIT}>Submit</Button>
        </Form>
    );
}

export default DefaultForm;