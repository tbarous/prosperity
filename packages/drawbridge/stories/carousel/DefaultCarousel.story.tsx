import React, {useEffect, useState} from "react";
import Carousel, {CarouselDirections} from "@components/carousel/Carousel";
import CarouselItem from "@components/carousel/CarouselItem";
import Image from "@components/image/Image";
import CarouselControls from "@components/carousel/CarouselControls";
import CarouselControl from "@components/carousel/CarouselControl";
import {ArrowCircleLeftSolid, ArrowCircleRightSolid} from "@icons";
import Icon from "@components/icon/Icon";
import CarouselItems from "@components/carousel/CarouselItems";
import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import usePrevious from "@hooks/usePrevious";

const CarouselStyled = styled(Carousel)`
  height: 200px;
`;

const ControlIconStyled = styled(Icon)`
  color: ${(p: { theme: ThemeInterface }) => p.theme.color.white}
`;

const DefaultCarousel = (args: { itemsPerSlide?: number, changeToSlide?: number, gutter?: number }) => {
    const [current, setCurrent] = useState<any>(0);

    const prevCurrent = usePrevious(current);

    useEffect(() => {
        console.log(prevCurrent)
        setCurrent(args.changeToSlide);
    }, [args.changeToSlide])

    function onChange(position){
        console.log(position)
        if(position===0)return
        setCurrent(position)
    }

    return (
        <CarouselStyled
            itemsPerSlide={args.itemsPerSlide}
            gutter={args.gutter}
            changeToSlide={current}
            onChange={onChange}
        >
            <CarouselControls>
                <CarouselControl
                    direction={CarouselDirections.LEFT}
                >
                    <ControlIconStyled
                        icon={ArrowCircleLeftSolid}
                        width={30}
                        height={30}
                    />
                </CarouselControl>

                <CarouselControl
                    direction={CarouselDirections.RIGHT}
                >
                    <ControlIconStyled
                        icon={ArrowCircleRightSolid}
                        width={30}
                        height={30}
                    />
                </CarouselControl>
            </CarouselControls>

            <CarouselItems>
                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img2.jpg" alt="img"/>
                </CarouselItem>

                <CarouselItem>
                    <Image src="/img.jpg" alt="img"/>
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
    changeToSlide: 0
};

export default DefaultCarousel;