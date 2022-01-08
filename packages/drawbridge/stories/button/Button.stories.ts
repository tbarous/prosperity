import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
import DefaultButton from "@stories/button/DefaultButton.story";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variation: {
            options: [ButtonVariationEnum.PRIMARY, ButtonVariationEnum.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [ButtonSizeEnum.SMALL, ButtonSizeEnum.MEDIUM, ButtonSizeEnum.LARGE],
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