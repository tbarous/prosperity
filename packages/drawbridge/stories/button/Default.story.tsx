import React from 'react';
import {StorybookButtonWrapper, StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Button, {Props} from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";

const Default = (args: Props) => (
    <StorybookWrapperStyled>
        <StorybookButtonWrapper>
            <Button {...args}>
                {args.children}
            </Button>
        </StorybookButtonWrapper>
    </StorybookWrapperStyled>
);

Default.args = {
    variation: ButtonVariationEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
    children: "Button"
};

export default Default;