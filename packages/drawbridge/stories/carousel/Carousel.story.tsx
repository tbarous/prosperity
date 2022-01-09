import React from "react";
import Carousel, {CarouselDirections} from "@components/carousel/Carousel";
import CarouselItem from "@components/carousel/CarouselItem";
import Image from "@components/image/Image";
import CarouselControls from "@components/carousel/CarouselControls";
import CarouselControl from "@components/carousel/CarouselControl";
import CarouselItems from "@components/carousel/CarouselItems";
import styled, {useTheme} from "styled-components";

const CarouselStyled = styled(Carousel)`height: 200px;`;


const DefaultCarousel = (args: { itemsPerSlide?: number, gutter?: number }) => {
    const {itemsPerSlide, gutter} = args;

    return (
        <CarouselStyled itemsPerSlide={itemsPerSlide} gutter={gutter}>
            <CarouselControls>
                <CarouselControl direction={CarouselDirections.LEFT}/>
                <CarouselControl direction={CarouselDirections.RIGHT}/>
            </CarouselControls>

            <CarouselItems>
                {Array(10).fill(0).map((item, index) => (
                    <CarouselItem key={index}><Image src="/img.jpg" alt="img"/></CarouselItem>
                ))}
            </CarouselItems>
        </CarouselStyled>
    );
}

DefaultCarousel.args = {
    itemsPerSlide: 3,
    gutter: 10
};

export default DefaultCarousel;