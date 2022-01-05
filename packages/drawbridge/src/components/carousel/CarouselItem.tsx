import React from "react";
import CarouselItemStyled from "@components/carousel/styled/CarouselItemStyled";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

interface Props extends BasicComponentProps {
    itemWidth?: number,
    leftDistance?: number,
    gutter?: number
}

const CarouselItem: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        itemWidth,
        leftDistance,
        gutter
    } = props;

    return (
        <CarouselItemStyled
            className={className}
            width={itemWidth}
            leftDistance={leftDistance}
            gutter={gutter}
        >
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;