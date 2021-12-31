import React from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import {BasicComponentProps} from "@typings";
import Snackbar, {Variation} from "@components/snackbar/Snackbar";

export default {
    title: 'Snackbar',
    component: Snackbar,
    argTypes: {},
};

const DefaultButtonTemplate = (args: BasicComponentProps) => (
    <StorybookWrapper>
        <Snackbar variation={Variation.Success}>
            {args.children}
        </Snackbar>
    </StorybookWrapper>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    children: "Success!"
};