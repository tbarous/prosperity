import React from 'react';
import Card from "@atoms/card/Card";
import styled from "styled-components";

const Wrapper = styled.div`width: 300px;height: 300px`;

const DefaultCard = (args: { rounded?: boolean }) => {
    const {rounded} = args;

    return (
        <Wrapper>
            <Card rounded={rounded}>

            </Card>
        </Wrapper>
    );
}

DefaultCard.args = {
    rounded: true
};

export default DefaultCard;