import React from "react";
import Carousel, {CarouselDirections} from "@components/carousel/Carousel";
import CarouselItem from "@components/carousel/CarouselItem";
import Image from "@components/image/Image";
import CarouselControls from "@components/carousel/CarouselControls";
import CarouselControl from "@components/carousel/CarouselControl";
import CarouselItems from "@components/carousel/CarouselItems";
import styled, {useTheme} from "styled-components";

const CarouselStyled = styled(Carousel)`height: 400px;`;

const DefaultCarousel = (args: { items?: number, gutter?: number }) => {
    const {items, gutter} = args;

    return (
        <CarouselStyled items={3} itemsLg={3} gutter={gutter}>
            <CarouselControls>
                <CarouselControl direction={CarouselDirections.LEFT}/>
                <CarouselControl direction={CarouselDirections.RIGHT}/>
            </CarouselControls>

            <CarouselItems>
                {Array(6).fill(0).map((item, index) => (
                    <CarouselItem key={index}><Image src={`https://picsum.photos/id/${index}/700/500`} alt="img"/></CarouselItem>
                ))}
            </CarouselItems>
        </CarouselStyled>
    );
}

DefaultCarousel.args = {
    items: 3,
    gutter: 30
};

export default DefaultCarousel;