import React from 'react';
import Link from "@components/link/Link";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultLink = (args: any) => (
    <StorybookWrapperStyled>
        <Link href="">Link</Link>
    </StorybookWrapperStyled>
);

DefaultLink.args = {

};

export default DefaultLink;