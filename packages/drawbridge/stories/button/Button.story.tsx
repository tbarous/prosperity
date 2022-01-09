import React from 'react';
import Button, {ButtonSizes, ButtonVariations} from "@components/button/Button";
import {Google} from "@icons";
import styled from "styled-components";

const Wrapper = styled.div`width: 300px;`;

const DefaultButton = (args: { variation?: ButtonVariations, size?: ButtonSizes, children?: string, icon?: boolean }) => {
    const {variation, size, children, icon} = args;

    return (
        <Wrapper>
            <Button
                primary={ButtonVariations.PRIMARY === variation}
                secondary={ButtonVariations.SECONDARY === variation}
                small={ButtonSizes.SMALL === size}
                medium={ButtonSizes.MEDIUM === size}
                large={ButtonSizes.LARGE === size}
                icon={icon ? Google : undefined}
            >
                {children}
            </Button>
        </Wrapper>
    );
}

DefaultButton.args = {
    variation: ButtonVariations.PRIMARY,
    size: ButtonSizes.MEDIUM,
    children: "Login",
    icon: false
};

export default DefaultButton;