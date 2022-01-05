import React from 'react';
import Text from "@components/text/Text";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultText = (args: any) => (
    <StorybookWrapperStyled>
        <Text>Text</Text>
    </StorybookWrapperStyled>
);

DefaultText.args = {};

export default DefaultText;