import React from 'react';
import Image from "@components/image/Image";

const DefaultImage = (args: {}) => (
    <Image src="" alt=""/>
);

DefaultImage.args = {
    src: "/img.jpg",
    alt: "img",
    width: "300"
};

export default DefaultImage;