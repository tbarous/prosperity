import React, {useEffect, useState} from "react";
import Carousel, {CarouselDirectionEnum, CarouselProps} from "@components/carousel/Carousel";
import CarouselItem from "@components/carousel/CarouselItem";
import Image from "@components/image/Image";
import CarouselControls from "@components/carousel/CarouselControls";
import CarouselControl from "@components/carousel/CarouselControl";
import {ArrowCircleLeftSolid, ArrowCircleRightSolid} from "@icons";
import Icon from "@components/icon/Icon";
import CarouselItems from "@components/carousel/CarouselItems";
import styled from "styled-components";

const CarouselStyled = styled(Carousel)`
  height: 500px;
`;

const DefaultCarousel = (args: CarouselProps) => {
    const [changeToSlide, setChangeToSlide] = useState<number | undefined>(undefined);

    useEffect(() => {
        setChangeToSlide(args.change)
    }, [args.change])

    return (
        <CarouselStyled {...args} change={changeToSlide}>
            <CarouselControls>
                <CarouselControl direction={CarouselDirectionEnum.LEFT}>
                    <Icon icon={ArrowCircleLeftSolid} width={50} height={50}/>
                </CarouselControl>

                <CarouselControl direction={CarouselDirectionEnum.RIGHT}>
                    <Icon icon={ArrowCircleRightSolid} width={50} height={50}/>
                </CarouselControl>
            </CarouselControls>

            <CarouselItems>
                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>
            </CarouselItems>
        </CarouselStyled>
    );
}

DefaultCarousel.args = {
    itemsPerSlide: 3,
    gutter: 10,
    change: -1
};

export default DefaultCarousel;