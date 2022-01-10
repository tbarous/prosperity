import React, {isValidElement, ReactElement, ReactNode, Children} from "react";
import CarouselControlsStyled from "@components/carousel/styled/CarouselControlsStyled";
import {CarouselDirections} from "@components/carousel/Carousel";
import {BasicComponentProps} from "@typings";
import {clone} from "@utils/ComponentUtils";

type ChildType = ReactNode & { props: { moveLeft?: () => void, moveRight?: () => void, direction?: CarouselDirections } };

type EnhancedChild = ReactElement | undefined | boolean;

export interface CarouselControlsProps extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    isOnStart?: boolean,
    isOnEnd?: boolean,
    moveLeft?: () => void,
    moveRight?: () => void,
    distance?: number,
    itemWidth?: number
}

const CarouselControls: React.FunctionComponent<CarouselControlsProps> = (props: CarouselControlsProps): ReactElement => {
    const {children, className, isOnStart, isOnEnd, moveLeft, moveRight} = props;

    function enhancedChild(child: ChildType): EnhancedChild {
        if (!child.props.direction) return;

        if (child.props.direction === CarouselDirections.LEFT && isOnStart) {
            return;
        }

        if (child.props.direction === CarouselDirections.LEFT && isOnEnd) {
            return;
        }

        return clone(child, {moveLeft, moveRight});
    }

    return (
        <CarouselControlsStyled className={className}>
            {Children.map<ReactNode, any>(children, enhancedChild)}
        </CarouselControlsStyled>
    )
}

export default CarouselControls;