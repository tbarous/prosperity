import React from 'react';
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultBadge = (args: { info?: boolean, danger?: boolean, success?: boolean, children?: string }) => (
    <StorybookWrapperStyled>
        <Badge>
            {args.children}
        </Badge>
    </StorybookWrapperStyled>
);

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;