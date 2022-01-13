import React from "react";
import ImageComponent from "@atoms/Image";

export default {
    title: 'Design System/Atoms/Image',
    component: () => {},
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const Image = (args: { src: string, alt: string, width: number, height: number }) => (
    <ImageComponent
        src={args.src}
        alt={args.alt}
        width={args.width}
        height={args.height}
    />
);

Image.args = {
    src: "/img/img.jpg",
    alt: "img",
    width: "300",
    height: "300"
};


export {
    Image
}