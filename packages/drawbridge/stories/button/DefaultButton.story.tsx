import React from 'react';
import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import {Google} from "@icons";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

interface Args {
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    children?: string,
    icon?: boolean
}

const DefaultButton = (args: Args) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Button
                        primary={ButtonVariationEnum.PRIMARY === args.variation}
                        secondary={ButtonVariationEnum.SECONDARY === args.variation}
                        small={ButtonSizeEnum.SMALL === args.size}
                        medium={ButtonSizeEnum.MEDIUM === args.size}
                        large={ButtonSizeEnum.LARGE === args.size}
                        icon={args.icon ? Google : null}
                    >
                        {args.children}
                    </Button>
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

DefaultButton.args = {
    variation: ButtonVariationEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
    children: "Login with Google",
    icon: false
};

export default DefaultButton;