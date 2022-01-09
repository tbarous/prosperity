import React, {useEffect, useMemo, useState} from "react";
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

const CarouselStyled = styled(Carousel)`
  height: 200px;
`;

const ControlIconStyled = styled(Icon)`
  color: ${(p: { theme: ThemeInterface }) => p.theme.color.white}
`;

const DefaultCarousel = (args: { itemsPerSlide?: number, gutter?: number }) => {
    const [changeToPosition, setChangeToPosition] = useState(0);

    return (
        <>
            <button onClick={() => setChangeToPosition(5)}>dsadsa</button>
            <button onClick={() => setChangeToPosition(2)}>dsadsa</button>
            <button onClick={() => setChangeToPosition(222)}>dsadsa</button>

            <CarouselStyled
                itemsPerSlide={args.itemsPerSlide}
                gutter={args.gutter}
                changeToPosition={changeToPosition}
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

                <CarouselItems>{Array(10).fill(0).map((item, index) => {
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
    gutter: 10
};

export default DefaultCarousel;