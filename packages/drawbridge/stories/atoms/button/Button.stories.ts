import Button, {ButtonSizes, ButtonVariations} from "@atoms/button/Button";
import DefaultButton from "@stories/atoms/button/Button.story";

export default {
    title: 'Atoms/Button',
    component: () => {},
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