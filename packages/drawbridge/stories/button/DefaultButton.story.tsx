import React from 'react';
import Button, {ButtonSizes, ButtonVariations} from "@components/button/Button";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {Google} from "@icons";

interface Args {
    variation?: ButtonVariations,
    size?: ButtonSizes,
    children?: string,
    icon?: boolean
}

const DefaultButton = (args: Args) => (
    <Container fluid>
        <Row>
            <Col xs={2}>
                <Button
                    primary={ButtonVariations.PRIMARY === args.variation}
                    secondary={ButtonVariations.SECONDARY === args.variation}
                    small={ButtonSizes.SMALL === args.size}
                    medium={ButtonSizes.MEDIUM === args.size}
                    large={ButtonSizes.LARGE === args.size}
                    icon={args.icon ? Google : null}
                >
                    {args.children}
                </Button>
            </Col>
        </Row>
    </Container>
);

DefaultButton.args = {
    variation: ButtonVariations.PRIMARY,
    size: ButtonSizes.MEDIUM,
    children: "Login with Google",
    icon: false
};

export default DefaultButton;