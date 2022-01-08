import React from 'react';
import Badge from "@components/badge/Badge";
import styled from "styled-components";
import Tooltip from "@components/tooltip/Tooltip";
import Button from "@components/button/Button";
import TooltipContentStyled from '@components/tooltip/styled/TooltipContentStyled';

const TooltipStyled = styled(Tooltip)`
  width: 150px;
`;

const DefaultTooltip = (args: { clickable: boolean }) => (
    <TooltipStyled clickable={args.clickable}>
        <Button>Trigger</Button>

        <TooltipContentStyled>aa</TooltipContentStyled>
    </TooltipStyled>
);

DefaultTooltip.args = {
    clickable: true
};

export default DefaultTooltip;