import Button from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";
import Default from "@stories/button/Default.story";

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
};

export {
    Default
}