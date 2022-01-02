import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import {CardStyled, StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import styled from "styled-components";
import {TextStyledProps} from "@components/text/styled/TextStyled";
import Card, {CardProps} from "@components/card/Card";

const TextStyled = styled(Text)`
  padding: ${(props: TextStyledProps) => props.theme.spacing.s8};
  line-height: ${(props: TextStyledProps) => props.theme.lineHeight.large};
`;

const DefaultCard = (args: CardProps) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row gutter={14}>
                <Col xs={12} sm={6} md={4} lg={4} xl={3}>
                    <Card {...args}>
                        <Image rounded-top={args.rounded} src="/img.jpg" alt="img"/>

                        <TextStyled>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam dolore eaque
                            error
                            exercitationem ipsam, laborum nulla numquam placeat rem suscipit voluptatum. Alias error id
                            iusto molestiae
                        </TextStyled>
                    </Card>
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

DefaultCard.args = {
    rounded: true
};

export default DefaultCard;