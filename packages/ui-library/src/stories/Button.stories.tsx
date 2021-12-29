import React from 'react';
import {ThemeProvider} from "styled-components";
import Button from '../../src/Components/Button/Button';
import Basic from "../Theme";

export default {
    title: 'Button',
    component: Button,
};

const Template = (args: any) => (
    <ThemeProvider theme={Basic}>
        <Button {...args}>
            Button
        </Button>
    </ThemeProvider>
);

export const Primary = Template.bind({});

// Primary.args = {
    // primary: true,
    // label: 'Button',
// };