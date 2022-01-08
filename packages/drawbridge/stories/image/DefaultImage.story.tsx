import React from 'react';
import Image from "@components/image/Image";
import {Props} from "@components/image/Image";
import styled from "styled-components";

const DefaultImage = (args: Props) => (
        <Image {...args} />
);

DefaultImage.args = {
    src: "/img.jpg",
    alt: "img",
    width: "300"
};

export default DefaultImage;