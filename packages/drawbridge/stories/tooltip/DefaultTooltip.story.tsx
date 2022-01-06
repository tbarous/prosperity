import React from 'react';
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import Tooltip from "@components/tooltip/Tooltip";
import Button from "@components/button/Button";
import TooltipContentStyled from '@components/tooltip/styled/TooltipContentStyled';

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const TooltipStyled = styled(Tooltip)`
  width: 150px;
`;

const DefaultTooltip = (args: { clickable: boolean }) => (
    <StorybookWrapperStyled>
        <TooltipStyled
            clickable={args.clickable}
        >
            <Button>Trigger</Button>
            <TooltipContentStyled>aa</TooltipContentStyled>
        </TooltipStyled>
    </StorybookWrapperStyled>
);

DefaultTooltip.args = {
    clickable: true
};

export default DefaultTooltip;