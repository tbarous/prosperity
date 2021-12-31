import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericComponents";
import Image from "@components/image/Image";
import {Props} from "@components/image/Image";

export default {
    title: 'Image',
    component: Image,
    argTypes: {},
};

const DefaultButtonTemplate = (args: Props) => (
    <StorybookWrapperStyled>
        <Image {...args} />
    </StorybookWrapperStyled>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
    src: "/img.jpg",
    alt: "img",
    width: "100",
    height: "100"
};