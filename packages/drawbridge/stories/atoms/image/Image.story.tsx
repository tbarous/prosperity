import React from 'react';
import Image from "@atoms/image/Image";

const DefaultImage = (args: { src: string, alt: string, width: number, height: number }) => (
    <Image src={args.src} alt={args.alt} width={args.width} height={args.height}/>
);

DefaultImage.args = {
    src: "/img/img.jpg",
    alt: "img",
    width: "300",
    height: "300"
};

export default DefaultImage;