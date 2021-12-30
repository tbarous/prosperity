import React from 'react';
import Button, {Size, Variation} from '../../components/button/Button';
import StorybookWrapper from "../StorybookWrapper";

export default {
    title: 'Button',
    component: Button,
};

const DefaultButtonTemplate = (args: { variation: Variation, onClick: () => void, size: Size }) => (
    <StorybookWrapper>
        <Button {...args}>
            Default Button
        </Button>
    </StorybookWrapper>
);

const PrimaryButtonTemplate = (args: any) => (
    <StorybookWrapper>
        <Button {...args} variation={Variation.PRIMARY}>
            Primary Button
        </Button>
    </StorybookWrapper>
);

const SecondaryButtonTemplate = (args: any) => (
    <StorybookWrapper>
        <Button {...args} variation={Variation.SECONDARY}>
            Secondary Button
        </Button>
    </StorybookWrapper>
);

const BigButtonTemplate = (args: any) => (
    <StorybookWrapper>
        <Button {...args} size={Size.BIG}>
            Big Button
        </Button>
    </StorybookWrapper>
);

const SmallButtonTemplate = (args: any) => (
    <StorybookWrapper>
        <Button {...args} size={Size.SMALL}>
            Small Button
        </Button>
    </StorybookWrapper>
);

export const Default: any = DefaultButtonTemplate.bind({});
export const Primary = PrimaryButtonTemplate.bind({});
export const Secondary = SecondaryButtonTemplate.bind({});
export const Big = BigButtonTemplate.bind({});
export const Small = SmallButtonTemplate.bind({});

Default.args = {
    variation: Variation.PRIMARY,
    size: Size.BIG,
    onClick: () => alert('Hello')
};