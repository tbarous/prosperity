import React, {ReactElement, ReactNode} from "react";
import CarouselItemStyled from "@components/carousel/styled/CarouselItemStyled";

interface CarouselItemProps {
    children: ReactNode,
    className?: string,
    itemWidth?: number,
    itemX?: number,
    gutter?: number
}

const CarouselItem: React.FunctionComponent<CarouselItemProps> = (props: CarouselItemProps): ReactElement => {
    const {
        children,
        className,
        itemWidth = 1,
        itemX = 0,
        gutter = 0
    } = props;

    return (
        <CarouselItemStyled
            className={className}
            width={itemWidth}
            itemX={itemX}
            gutter={gutter}
        >
            AAAAAAAAAAAAAAA {itemX}
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;