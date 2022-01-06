import React from 'react';
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import styled from "styled-components";
import Card from "@components/card/Card";
import {px} from "@utils/ThemeUtils";
import {T} from "@components/text/styled/TextStyled";

const TextStyled = styled(Text)`
  padding: ${(p: T) => px(p.theme.spacing.s6)} ${(p: T) => px(p.theme.spacing.s8)};
  line-height: ${(p: T) => p.theme.lineHeight.large};
`;

interface Props {
    image: { src: string, alt: string },
    text: string
}

const CardImageText = (props: Props) => (
    <Card rounded>
        <Image
            rounded-top
            src={props.image.src}
            alt={props.image.alt}
        />

        <TextStyled>
            {props.text}
        </TextStyled>
    </Card>
);

export default CardImageText;