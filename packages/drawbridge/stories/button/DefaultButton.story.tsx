import React from 'react';
import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {Google} from "@icons";

interface Args {
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    children?: string,
    icon?: boolean
}

const DefaultButton = (args: Args) => (
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
);

DefaultButton.args = {
    variation: ButtonVariationEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
    children: "Login with Google",
    icon: false
};

export default DefaultButton;