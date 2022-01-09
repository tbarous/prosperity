import React from 'react';
import Button, {ButtonSizes, ButtonVariations} from "@components/button/Button";
import {Google} from "@icons";
import styled from "styled-components";

const Wrapper = styled.div`width: 300px;`;

const DefaultButton = (args: {
    variation?: ButtonVariations,
    size?: ButtonSizes,
    children?: string,
    icon?: boolean
}) => (
    <Wrapper>
        <Button
            primary={ButtonVariations.PRIMARY === args.variation}
            secondary={ButtonVariations.SECONDARY === args.variation}
            small={ButtonSizes.SMALL === args.size}
            medium={ButtonSizes.MEDIUM === args.size}
            large={ButtonSizes.LARGE === args.size}
            icon={args.icon ? Google : undefined}
        >
            {args.children}
        </Button>
    </Wrapper>
);

DefaultButton.args = {
    variation: ButtonVariations.PRIMARY,
    size: ButtonSizes.MEDIUM,
    children: "Login with Google",
    icon: false
};

export default DefaultButton;