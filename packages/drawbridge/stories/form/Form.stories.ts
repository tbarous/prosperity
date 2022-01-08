import DefaultInput from "@stories/form/DefaultInput.story";
import DefaultForm from "@stories/form/DefaultForm.story";
import DefaultCheckbox from "./DefaultCheckbox.story";
import DefaultRadio from "./DefaultRadio.story";
import DefaultSwitch from "./DefaultSwitch.story";

export default {
    title: 'Form',
    component: () => {
    },
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

export {
    DefaultInput,
    DefaultForm,
    DefaultCheckbox,
    DefaultRadio,
    DefaultSwitch
}