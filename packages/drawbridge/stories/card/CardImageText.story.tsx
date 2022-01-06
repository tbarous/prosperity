import React from 'react';
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import CardImageText from "../../src/compositions/cards/CardImageText";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const CardImageTextStory = (args: { rounded?: boolean }) => (
    <StorybookWrapperStyled>
        <Container fluid>
            <Row gutter={14}>
                <Col lg={3}>
                    <CardImageText
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae deserunt dignissimos, distinctio
    dolore error exercitationem minima nisi placeat praesentium provident quas quo ratione sunt temporibus unde vel
    voluptas."
                        image={{src: "/img.jpg", alt: "img"}}
                    />
                </Col>
            </Row>
        </Container>
    </StorybookWrapperStyled>
);

CardImageTextStory.args = {
    rounded: true
};

export default CardImageTextStory;