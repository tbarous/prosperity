import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";
import Card from "@components/card/Card";
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import {T} from "@components/text/styled/TextStyled";
import {px} from "@utils/ThemeUtils";

const TextStyled = styled(Text)`
  padding: ${(p: T) => px(p.theme.spacing.s6)} ${(p: T) => px(p.theme.spacing.s8)};
  line-height: ${(p: T) => p.theme.lineHeight.large};
`;

const DefaultCard = (args: { rounded?: boolean }) => (
    <Container fluid>
        <Row gutter={14}>
            <Col lg={3}>
                <Card rounded={args.rounded}>
                    <Image
                        rounded-top={args.rounded}
                        src="/img.jpg"
                        alt="img"
                    />

                    <TextStyled>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae deserunt
                        dignissimos, distinctio
                        dolore error exercitationem minima nisi placeat praesentium provident quas quo ratione sunt
                        temporibus unde vel
                        voluptas.
                    </TextStyled>
                </Card>
            </Col>
        </Row>
    </Container>
);

DefaultCard.args = {
    rounded: true
};

export default DefaultCard;