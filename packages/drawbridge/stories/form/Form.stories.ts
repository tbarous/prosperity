import DefaultInput from "@stories/form/Input.story";
import DefaultForm from "@stories/form/Form.story";
import DefaultCheckbox from "./Checkbox.story";
import DefaultRadio from "./Radio.story";
import DefaultSwitch from "./Switch.story";

export default {
    title: 'Form',
    component: () => {},
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