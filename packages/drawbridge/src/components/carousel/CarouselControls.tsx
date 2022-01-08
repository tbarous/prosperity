import React, {isValidElement, ReactElement, ReactNode, Children} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import CarouselControlsStyled from "@components/carousel/styled/CarouselControlsStyled";
import {CarouselControlProps} from "@components/carousel/CarouselControl";
import {CarouselDirections} from "@components/carousel/Carousel";

interface Props extends BasicComponentProps {
    onMove?: (direction: CarouselDirections) => void,
    isOnStart?: boolean,
    isOnEnd?: boolean,
}

type A = ReactNode & { props: CarouselControlProps };

const CarouselControls: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        onMove,
        isOnStart,
        isOnEnd
    } = props;

    /**
     * Renders left handler control component if we are not at the start of the carousel (1st slide).
     * Renders right handler control component if we are not at the end of the carousel.
     * Attaches the onMove function on each handler component.
     * @param child
     * @return ReactElement
     */
    function getChild(child: A): ReactElement | undefined | boolean {
        const direction = child.props.direction;

        if (!direction) return;

        if ((direction === CarouselDirections.LEFT && isOnStart) || (direction === CarouselDirections.RIGHT && isOnEnd)) return;

        return isValidElement(child) && React.cloneElement(child, {onMove});
    }

    return (
        <CarouselControlsStyled className={className}>
            {Children.map<ReactNode, any>(children, getChild)}
        </CarouselControlsStyled>
    )
}

export default CarouselControls;