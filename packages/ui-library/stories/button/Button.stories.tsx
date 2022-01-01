import React from 'react';
import {StorybookButtonWrapper, StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Button, {Props} from "@components/button/Button";
import VariationEnum from "@components/button/enums/VariationEnum";
import SizeEnum from "@components/button/enums/SizeEnum";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variation: {
            options: [VariationEnum.PRIMARY, VariationEnum.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [SizeEnum.SMALL, SizeEnum.MEDIUM, SizeEnum.LARGE],
            control: {type: 'radio'},
        },
    },
};

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapperStyled>
        <StorybookButtonWrapper>
            <Button {...args}>
                {args.children}
            </Button>
        </StorybookButtonWrapper>
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    variation: VariationEnum.PRIMARY,
    size: SizeEnum.MEDIUM,
    children: "Button"
};