import React from 'react';
import styled from "styled-components";
import Tooltip from "@components/tooltip/Tooltip";
import Button from "@components/button/Button";
import TooltipContentStyled from '@components/tooltip/styled/TooltipContentStyled';
import {px} from "@utils/ThemeUtils";
import Container from "@components/grid/Container";
import Col from "@components/grid/Col";
import Row from "@components/grid/Row";

const Content = styled(TooltipContentStyled)`
  box-shadow: ${(p: any) => p.theme.shadow.medium};
  background: ${(p: any) => p.theme.color.white};
  padding: ${(p: any) => px(p.theme.spacing.s4)};
`;

const DefaultTooltip = (args: { clickable: boolean }) => (
    <Container fluid>
        <Row>
            <Col xs={1}>
                <Tooltip
                    clickable={args.clickable}
                >
                    <Button>Trigger</Button>

                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid, amet
                        architecto at,
                        cupiditate
                        dicta ea explicabo id iusto neque nostrum officiis pariatur perferendis possimus quis ratione
                        sed ullam?
                    </Content>
                </Tooltip>
            </Col>
        </Row>
    </Container>
);

DefaultTooltip.args = {
    clickable: true
};

export default DefaultTooltip;