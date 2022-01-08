import React, {isValidElement, ReactElement, ReactNode, Children} from "react";
import CarouselControlsStyled from "@components/carousel/styled/CarouselControlsStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {fn} from "@helpers";

interface T {
    children: ReactNode,
    className?: string,
    onMove?: (direction: CarouselDirections) => void,
    isOnStart?: boolean,
    isOnEnd?: boolean,
}

const CarouselControls: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        onMove = fn,
        isOnStart = true,
        isOnEnd = false
    } = props;

    function getChild(child: ReactNode & { props: { onMove?: (direction: CarouselDirections) => void, direction?: CarouselDirections, } }): ReactElement | undefined | boolean {
        const direction = child.props.direction;

        if (!direction) return;

        if ((direction === CarouselDirections.LEFT && isOnStart) || (direction === CarouselDirections.RIGHT && isOnEnd)) return;

        return isValidElement(child) && React.cloneElement(child, {onMove});
    }

    return (
        <CarouselControlsStyled
            className={className}
        >
            {Children.map<ReactNode, any>(children, getChild)}
        </CarouselControlsStyled>
    )
}

export default CarouselControls;