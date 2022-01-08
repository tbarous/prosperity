import Button, {ButtonSizes, ButtonVariations} from "@components/button/Button";
import DefaultButton from "@stories/button/DefaultButton.story";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variation: {
            options: [ButtonVariations.PRIMARY, ButtonVariations.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [ButtonSizes.SMALL, ButtonSizes.MEDIUM, ButtonSizes.LARGE],
            control: {type: 'radio'},
        },
    },
    parameters: {
        layout: 'padded',
    },
};

export {
    DefaultButton,
}