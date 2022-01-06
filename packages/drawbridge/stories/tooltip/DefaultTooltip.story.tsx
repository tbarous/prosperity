import React from 'react';
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import {BasicComponentProps} from "@typings";
import Tooltip from "@components/tooltip/Tooltip";
import Button from "@components/button/Button";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

interface Props extends BasicComponentProps {
    info?: boolean,
    danger?: boolean,
    success?: boolean,
}

const TooltipStyled = styled(Tooltip)`
  width: 150px;
`;

interface Args {
    clickable: boolean
}

const DefaultTooltip = (args: Args) => (
    <StorybookWrapperStyled>
        <TooltipStyled
            clickable={args.clickable}
            Content={<div>aaa</div>}
            Trigger={<Button>Trigger</Button>}
        />
    </StorybookWrapperStyled>
);

DefaultTooltip.args = {
    children: "Badge",
    clickable: true
};

export default DefaultTooltip;