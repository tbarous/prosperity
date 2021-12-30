import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import Basic from "../../Theme";
import Button, {Size, Variation} from '../../Components/Button/Button';
import "../../../fonts/fonts.css";

export default {
    title: 'Button',
    component: Button,
};

const Wrapper = styled.div` 
    max-width: 300px;
`;

const theme = {
    theme: Basic
}

const DefaultButtonTemplate = (args: { variation: Variation, onClick: () => void, size: Size }) => (
    <Wrapper>
        <ThemeProvider {...theme}>
            <Button {...args}>
                Default Button
            </Button>
        </ThemeProvider>
    </Wrapper>
);

const PrimaryButtonTemplate = (args: any) => (
    <Wrapper>
        <ThemeProvider {...theme}>
            <Button {...args} variation={Variation.PRIMARY}>
                Primary Button
            </Button>
        </ThemeProvider>
    </Wrapper>
);

const SecondaryButtonTemplate = (args: any) => (
    <Wrapper>
        <ThemeProvider {...theme}>
            <Button {...args} variation={Variation.SECONDARY}>
                Secondary Button
            </Button>
        </ThemeProvider>
    </Wrapper>
);

const BigButtonTemplate = (args: any) => (
    <Wrapper>
        <ThemeProvider {...theme}>
            <Button {...args} size={Size.BIG}>
                Big Button
            </Button>
        </ThemeProvider>
    </Wrapper>
);

const SmallButtonTemplate = (args: any) => (
    <Wrapper>
        <ThemeProvider {...theme}>
            <Button {...args} size={Size.SMALL}>
                Small Button
            </Button>
        </ThemeProvider>
    </Wrapper>
);

export const Primary = PrimaryButtonTemplate.bind({});
export const Secondary = SecondaryButtonTemplate.bind({});
export const Big = BigButtonTemplate.bind({});
export const Small = SmallButtonTemplate.bind({});

export const Default = DefaultButtonTemplate.bind({});

Default.args = {
    variation: Variation.PRIMARY,
    size: Size.BIG,
    onClick: () => alert('Hello')
};

// Secondary.args = {
//     primary: true,
//     label: 'Button',
// };