import React from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import Divider from "@components/divider/Divider";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultDivider = (args: any) => (
    <StorybookWrapperStyled>
        <Divider />
    </StorybookWrapperStyled>
);

DefaultDivider.args = {

};

export default DefaultDivider;