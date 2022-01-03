import React from 'react';
import Button, {ButtonProps} from "@components/button/Button";
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

const DefaultButton = (args: ButtonProps) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row>
                <Col xs={1}>
                    <Button {...args}>
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