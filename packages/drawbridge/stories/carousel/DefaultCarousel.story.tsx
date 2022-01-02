import React, {useEffect, useState} from "react";
import Carousel, {CarouselProps} from "@components/carousel/Carousel";
import {StorybookWrapperStyled} from "@stories/GenericStyledComponents";
import CarouselItem from "@components/carousel/CarouselItem";
import Image from "@components/image/Image";
import CarouselControls from "@components/carousel/CarouselControls";
import CarouselControl from "@components/carousel/CarouselControl";
import {ArrowCircleLeftSolid, ArrowCircleRightSolid} from "@components/icon/Icons";
import Icon from "@components/icon/Icon";
import CarouselItems from "@components/carousel/CarouselItems";
import styled from "styled-components";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";

const CarouselStyled = styled(Carousel)`
  height: 500px;
`;

const DefaultCarousel = (args: CarouselProps) => {
    const [change, setChange] = useState<number | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            setChange(2)
        }, 2000)
    }, [])

    return (
        <StorybookWrapperStyled>
            <CarouselStyled {...args} change={change}>
                <CarouselControls>
                    <CarouselControl direction={CarouselDirectionEnum.LEFT}>
                        <Icon color="white" icon={ArrowCircleLeftSolid} width={50} height={50}/>
                    </CarouselControl>

                    <CarouselControl direction={CarouselDirectionEnum.RIGHT}>
                        <Icon color="white" icon={ArrowCircleRightSolid} width={50} height={50}/>
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
        </StorybookWrapperStyled>
    );
}

DefaultCarousel.args = {
    itemsPerSlide: 3,
    gutter: 10
};

export default DefaultCarousel;