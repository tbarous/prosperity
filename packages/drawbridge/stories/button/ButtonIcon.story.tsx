import React from 'react';
import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {Facebook, Google, Times} from "@icons";
import {T} from "@components/icon/styled/IconStyled";
import Text from "@components/text/Text";
import {px} from "@utils/ThemeUtils";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

interface DefaultButtonArgsInterface {
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    children?: string
}

const IconStyled = styled(Icon)`
  color: ${(p: T) => p.theme.color.white};
`;

const TextStyled = styled(Text)`
  color: ${(p: T) => p.theme.color.white};
  margin-left: ${(p: T) => px(p.theme.spacing.s3)};
`;

const Wrapper = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`;

const ButtonIcon = (args: DefaultButtonArgsInterface) => (
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
                    >
                        <Wrapper>
                            <IconStyled icon={Google} width={24} height={24}/>
                            <TextStyled>{args.children}</TextStyled>
                        </Wrapper>
                    </Button>
                </Col>
            </Row>

            <br/>

            <Row>
                <Col xs={2}>
                    <Button
                        primary={ButtonVariationEnum.PRIMARY === args.variation}
                        secondary={ButtonVariationEnum.SECONDARY === args.variation}
                        small={ButtonSizeEnum.SMALL === args.size}
                        medium={ButtonSizeEnum.MEDIUM === args.size}
                        large={ButtonSizeEnum.LARGE === args.size}
                    >
                        <Wrapper>
                            <IconStyled icon={Facebook} width={24} height={24}/>
                            <TextStyled>{args.children}</TextStyled>
                        </Wrapper>
                    </Button>
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

ButtonIcon.args = {
    variation: ButtonVariationEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
    children: "Login with Google"
};

export default ButtonIcon;