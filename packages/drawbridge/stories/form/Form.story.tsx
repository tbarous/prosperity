import React from "react";
import Input from "@components/form/Input";
import Form from "@components/form/Form";

const DefaultForm = (args: any) => {
    function onSubmit() {
        console.log("Submitted!")
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input label="Email"/>
            <Input label="Password"/>
        </Form>
    );
}

export default DefaultForm;