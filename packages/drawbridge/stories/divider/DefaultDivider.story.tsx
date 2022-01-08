import React from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import Divider from "@components/divider/Divider";
import Text from "@components/text/Text";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultDivider = (args: {spacing?: number}) => (
    <StorybookWrapperStyled>
        <Text>Text</Text>

        <Divider spacing={args.spacing}/>

        <Text>Text</Text>
    </StorybookWrapperStyled>
);

DefaultDivider.args = {
    spacing: 10
};

export default DefaultDivider;