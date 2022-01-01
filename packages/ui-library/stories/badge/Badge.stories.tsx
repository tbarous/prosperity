import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericComponents";
import {Props} from "@components/image/Image";
import Badge from "@components/badge/Badge";
import Text from "@components/text/Text";
export default {
    title: 'Badge',
    component: Badge,
    argTypes: {},
};

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapperStyled>
        <Text>
            Badge Text
        <Badge {...args} />
        </Text>
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    children: "1"
};