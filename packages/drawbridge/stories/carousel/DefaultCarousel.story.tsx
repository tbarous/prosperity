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
import Button from "@components/button/Button";
import usePrevious from "@hooks/usePrevious";

const CarouselStyled = styled(Carousel)`
  height: 200px;
`;

const ControlIconStyled = styled(Icon)`
  color: ${(p: { theme: ThemeInterface }) => p.theme.color.white}
`;

const DefaultCarousel = (args: { itemsPerSlide?: number, changeToSlide?: number, gutter?: number }) => {
    const [position, setPosition] = useState(0);

    function onChange(p: number) {
        setPosition(p);
    }

    useEffect(() => {
        setPosition(args.changeToSlide)
    }, [args.changeToSlide])

    return (
        <>
            <button onClick={() => setPosition(5)}>dqwd</button>
            <button onClick={() => setPosition(2)}>dqwd</button>
            <button onClick={() => setPosition(6)}>dqwd</button>

            <CarouselStyled
                itemsPerSlide={args.itemsPerSlide}
                gutter={args.gutter}
                onChange={onChange}
                position={position}
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

                <CarouselItems>{[1, 2, 3, 4, 5, 6, 7, 5, 2].map((item, index) => {
                    return (
                        <CarouselItem key={index}>
                            <Image src="/img.jpg" alt="img"/>
                        </CarouselItem>
                    )
                })}
                </CarouselItems>
            </CarouselStyled>

        </>

    );
}

DefaultCarousel.args = {
    itemsPerSlide: 3,
    gutter: 10,
    changeToSlide: 0
};

export default DefaultCarousel;