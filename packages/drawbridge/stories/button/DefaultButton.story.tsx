import React from 'react';
import Button from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

interface DefaultButtonArgsInterface {
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    children?: string
}

const DefaultButton = (args: DefaultButtonArgsInterface) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={1}>
                    <Button
                        primary={ButtonVariationEnum.PRIMARY === args.variation}
                        secondary={ButtonVariationEnum.SECONDARY === args.variation}
                        small={ButtonSizeEnum.SMALL === args.size}
                        medium={ButtonSizeEnum.MEDIUM === args.size}
                        large={ButtonSizeEnum.LARGE === args.size}
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
    children: "Button"
};

export default DefaultButton;