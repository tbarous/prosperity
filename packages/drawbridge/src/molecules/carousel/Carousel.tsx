import React, {ReactNode, Children, useState, useEffect, ReactElement, FunctionComponent} from "react";
import CarouselStyled from "@components/carousel/styled/CarouselStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";
import useViewportDimensions from "@hooks/useViewportDimensions";
import {useTheme} from "styled-components";
import useViewportWidthOnResize from "@hooks/useViewportWidthOnResize";
import useDebounce from "@hooks/useDebounce";

export enum CarouselDirections {
    LEFT = "left",
    RIGHT = "right"
}

export interface CarouselProps extends BasicComponentProps {
    items?: number,
    itemsLg?: number,
    gutter?: number,
    current?: number
}

const Carousel: FunctionComponent<CarouselProps> = (props: CarouselProps): ReactElement => {
    const {children, className, items = 2, gutter = 0, current = 0, itemsLg} = props;

    const [count, setCount] = useState(0);
    const [distance, setDistance] = useState(current*itemWidth);

    // const {width} = useViewportWidthOnResize();
    // const theme = useTheme();
    // let items = 2;
    // if (_items) items = _items;
    // if (itemsLg && width > theme.breakpoint.lg) items = itemsLg;

    useEffect(() => {
        // if (count === 0) return;
        // const countReached = current > count - items;
        // if (countReached || current < 0 || current === position) return;
        setDistance(current*itemWidth);
    }, [current]);

    const itemWidth = 100 / items;
    const isOnStart = distance < itemWidth;
    const isOnEnd = count * itemWidth - distance <= 100;
    const childProps = {
        isOnStart,
        isOnEnd,
        gutter,
        itemWidth,
        getCount,
        distance,
        updateDistance,
        moveLeft,
        moveRight,
        items,
        moveClosest
    }

    function moveClosest(distance) {
        for (let i = 0; i < count; i++) {
            if (distance - i * itemWidth <= itemWidth) {
                if ((i + 1) * itemWidth - distance < distance - i * itemWidth) {
                    updateDistance((i + 1) * itemWidth)

                    break;
                } else {
                    updateDistance((i) * itemWidth)

                    break;
                }
            }
        }
    }

    function moveLeft(): void {
        for (let i = 0; i <= count; i++) {
            if (distance - i * itemWidth <= itemWidth) {
                updateDistance(i * itemWidth);
                break;
            }
        }
    }

    function moveRight(): void {
        for (let i = 0; i <= count; i++) {
            if (distance - i * itemWidth < itemWidth) {
                updateDistance((i + 1) * (itemWidth));
                break;
            }
        }
    }

    function getCount(count: number): void {
        setCount(count)
    }

    function updateDistance(distance: number) {
        setDistance(distance);
    }

    return (
        <CarouselStyled className={className}>
            {Children.map(children, (child: ReactNode) => clone(child, childProps))}
        </CarouselStyled>
    )
}

export default Carousel;