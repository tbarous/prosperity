import React from 'react';
import {Props} from "@components/image/Image";
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultBadge = (args: Props) => (
    <StorybookWrapperStyled>
        <Badge {...args} />
    </StorybookWrapperStyled>
);

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;