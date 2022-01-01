import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericComponents";
import {Props} from "@components/image/Image";
import Carousel from "@components/carousel/Carousel";

export default {
    title: 'Carousel',
    component: Carousel,
    argTypes: {},
};

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapperStyled>
        <Carousel {...args} />
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {

};