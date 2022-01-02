import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import {Props} from "@components/image/Image";
import Badge from "@components/badge/Badge";

const DefaultBadge = (args: Props) => (
    <StorybookWrapperStyled>
        <Badge {...args} />
    </StorybookWrapperStyled>
);

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;