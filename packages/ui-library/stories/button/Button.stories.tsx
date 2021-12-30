import React from 'react';
import StorybookWrapper from "../StorybookWrapper";
import Button, {Props} from "@components/button/Button";
import Variation from "@components/button/enums/Variation";
import Size from "@components/button/enums/Size";
import styled from "styled-components";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variation: {
            options: [Variation.PRIMARY, Variation.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [Size.SMALL, Size.MEDIUM, Size.LARGE],
            control: {type: 'radio'},
        },
    },
};

const Wrapper = styled.div`
  margin: 2rem;
  width: 150px;
`;

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapper>
        <Wrapper>
            <Button {...args}>
                Default Button
            </Button>
        </Wrapper>
    </StorybookWrapper>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    variation: Variation.PRIMARY,
    size: Size.MEDIUM
};