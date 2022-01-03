import React from 'react';
import Image from "@components/image/Image";
import {Props} from "@components/image/Image";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const DefaultImage = (args: Props) => (
    <StorybookWrapperStyled>
        <Image {...args} />
    </StorybookWrapperStyled>
);

DefaultImage.args = {
    src: "/img.jpg",
    alt: "img",
    width: "300"
};

export default DefaultImage;