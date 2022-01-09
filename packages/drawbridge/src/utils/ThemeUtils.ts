import {css} from "styled-components";

function px(s: string | number) {
    return `${s}px`;
}

function animation(animation: any, ms: number) {
    return css`${animation} ${ms / 1000}s`;
}

function transition(
    props: { ms?: number, property?: string, algorithm?: string }
) {
    let data = {
        ms: props.ms || 0,
        property: props.property || "transform",
        algorithm: props.algorithm || "linear"
    }

    return css`${data.property} ${data.ms / 1000}s ${data.algorithm}`;
}

function transformY(flag: boolean, dimension: number) {
    return flag ? `translateY(0)` : `translateY(${px(dimension)})`;
}

export {
    px,
    animation,
    transition,
    transformY
}