import React, {ReactElement, ReactNode} from "react";
import CarouselItemStyled from "@components/carousel/styled/CarouselItemStyled";
import {BasicComponentProps} from "@typings";

interface CarouselItemProps extends BasicComponentProps {
    itemWidth?: number,
    itemX?: number,
    gutter?: number
}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = (props: CarouselItemProps): ReactElement => {
    const {children, className, itemWidth, itemX, gutter} = props;

    return (
        <CarouselItemStyled className={className} width={itemWidth} itemX={itemX} gutter={gutter}>
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;