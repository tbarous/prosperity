import React from 'react';
import styled from "styled-components";
import Tooltip from "@components/tooltip/Tooltip";
import TooltipContentStyled from '@components/tooltip/styled/TooltipContentStyled';
import {px} from "@utils/ThemeUtils";

const Content = styled(TooltipContentStyled)`
  box-shadow: ${(p: any) => p.theme.shadow.medium};
  background: ${(p: any) => p.theme.color.white};
  padding: ${(p: any) => px(p.theme.spacing.s4)};
`;

const Wrapper = styled.div`width: 300px;`;

const DefaultTooltip = (args: { clickable: boolean }) => {
    const {clickable} = args;

    return (
        <Wrapper>
            <Tooltip clickable={clickable}>
                <button>Trigger</button>

                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid, amet architecto
                </Content>
            </Tooltip>
        </Wrapper>
    );
}

DefaultTooltip.args = {
    clickable: true
};

export default DefaultTooltip;