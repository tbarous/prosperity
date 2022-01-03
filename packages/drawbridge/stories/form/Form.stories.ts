import DefaultInput from "@stories/form/DefaultInput.story";
import DefaultForm from "@stories/form/DefaultForm.story";
import FormComponent from "@components/form/Form";
import DefaultCheckbox from "./DefaultCheckbox.story";
import DefaultRadio from "./DefaultRadio.story";

export default {
    title: 'Form',
    component: FormComponent,
    argTypes: {},
};

export {
    DefaultInput,
    DefaultForm,
    DefaultCheckbox,
    DefaultRadio
}