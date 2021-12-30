import React from 'react';
import StorybookWrapper, {StorybookWrapperStyled} from "../StorybookWrapper";
import {BasicComponentProps} from "@typings";
import Navbar from "@components/navbar/Navbar";

export default {
    title: 'Navbar',
    component: Navbar,
    argTypes: {},
};

const DefaultButtonTemplate = (args: BasicComponentProps) => (
    <StorybookWrapper>
        <Navbar>
            {args.children}
        </Navbar>
    </StorybookWrapper>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    children: 1
};