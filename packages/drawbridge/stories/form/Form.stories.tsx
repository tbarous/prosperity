import React from 'react';
import InputStory from "@stories/form/Input.story";
import FormStory from "@stories/form/Form.story";
import FormComponent from "@components/form/Form";

export default {
    title: 'Form',
    component: FormComponent,
    argTypes: {},
};

export const Input: any = InputStory.bind({});

Input.args = {
    label: "Label"
};

export const Form: any = FormStory.bind({});

Form.args = {};