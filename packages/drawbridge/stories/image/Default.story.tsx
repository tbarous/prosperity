import React from 'react';
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import Image from "@components/image/Image";
import {Props} from "@components/image/Image";

const Default = (args: Props) => (
    <StorybookWrapperStyled>
        <Image {...args} />
    </StorybookWrapperStyled>
);

Default.args = {
    src: "/img.jpg",
    alt: "img",
    width: "300"
};

export default Default;