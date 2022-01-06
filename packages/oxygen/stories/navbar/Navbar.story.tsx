import React from 'react';
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import Navbar from "@components/navbars/Navbar";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultCard = (args: { rounded?: boolean }) => (
    <StorybookWrapperStyled>
        <Navbar />
    </StorybookWrapperStyled>
);

DefaultCard.args = {
    rounded: true
};

export default DefaultCard;