import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
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
    width: "300",
    height: "300"
};