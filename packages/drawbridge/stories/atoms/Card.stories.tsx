import React from "react";
import CardComponent from '@atoms/Card';
import styled from "styled-components";

export default {
    title: 'Design System/Atoms/Card',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Wrapper = styled.div`width: 300px;height: 300px`;

const Card = (args: {}) => {
    return <Wrapper><CardComponent> </CardComponent></Wrapper>
}

Card.args = {};

export {
    Card
}