import React from 'react';
import Card from "@components/card/Card";
import Image from "@components/image/Image";
import styled from "styled-components";
import Text from "@components/text/Text";

const Wrapper = styled.div`width: 300px;`;
const TextStyled = styled(Text)`padding: 1rem`;

const DefaultCard = (args: { rounded?: boolean }) => {
    const {rounded} = args;

    return (
        <Wrapper>
            <Card rounded={rounded}>
                <Image roundedTop={rounded} src="/img.jpg" alt="img"/>

                <TextStyled>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae deserunt
                    dignissimos, distinctio dolore error exercitationem minima nisi placeat praesentium provident quas
                    quo ratione sunt temporibus unde vel voluptas.
                </TextStyled>
            </Card>
        </Wrapper>

    );
}

DefaultCard.args = {
    rounded: true
};

export default DefaultCard;