import React from 'react';
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import {BasicComponentProps} from "@typings";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

interface Props extends BasicComponentProps {
    info?: boolean,
    danger?: boolean,
    success?: boolean,
}

const DefaultBadge = (args: Props) => (
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