import React, {ReactElement} from "react";
import CarouselItemStyled from "@components/carousel/styled/CarouselItemStyled";
import {BasicComponentProps} from "@typings";

export interface CarouselItemProps extends BasicComponentProps {
    width: number,
    distance: number,
    gutter: number
}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = (props: CarouselItemProps): ReactElement => {
    const {children, className, width, distance, gutter} = props;

    return (
        <CarouselItemStyled className={className} width={width} distance={distance} gutter={gutter}>
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;