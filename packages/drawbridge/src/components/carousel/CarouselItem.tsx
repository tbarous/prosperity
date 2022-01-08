import React, {ReactElement, ReactNode} from "react";
import CarouselItemStyled from "@components/carousel/styled/CarouselItemStyled";

interface T {
    children: ReactNode,
    className?: string,
    itemWidth?: number,
    itemX?: number,
    gutter?: number
}

const CarouselItem: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        itemWidth,
        itemX,
        gutter
    } = props;

    return (
        <CarouselItemStyled
            className={className}
            width={itemWidth}
            itemX={itemX}
            gutter={gutter}
        >
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;