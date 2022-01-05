import React from 'react';
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import styled from "styled-components";
import Card from "@components/card/Card";
import TextStyledProps from "@components/text/styled/TextStyledProps";
import {px} from "@utils/ThemeUtils";

const TextStyled = styled(Text)`
  padding: ${(props: TextStyledProps) => px(props.theme.spacing.s6)} ${(props: TextStyledProps) => px(props.theme.spacing.s8)};
  line-height: ${(props: TextStyledProps) => props.theme.lineHeight.large};
`;

interface Props {
    image: { src: string, alt: string },
    text: string
}

const CardImageText = (props: Props) => (
    <Card>
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