import React from "react";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import AuthModal from "../../src/compositions/modals/AuthModal";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const Auth = (args: any) => {
    return (
        <StorybookWrapperStyled>
            <AuthModal open={args.open}/>
        </StorybookWrapperStyled>
    )
};

Auth.args = {
    open: true
};

export default Auth;