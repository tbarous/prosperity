import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import {Props} from "@components/image/Image";
import Badge from "@components/badge/Badge";

const Default = (args: Props) => (
    <StorybookWrapperStyled>
        <Badge {...args} />
    </StorybookWrapperStyled>
);

Default.args = {
    children: "Badge"
};

export default Default;