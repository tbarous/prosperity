import {css} from "styled-components";

function px(s?: string | number) {
    if (!s) return;

    return `${s}px`;
}

function percentage(s: number) {
    return `${s}%`;
}

function animation(animation: any, ms: number) {
    return css`${animation} ${ms / 1000}s`;
}

function transition(props: { ms?: number, property?: string, timing?: string }) {
    let data = {
        ms: props.ms || 0,
        property: props.property || "transform",
        timing: props.timing || "linear"
    }

    return css`${data.property} ${data.ms / 1000}s ${data.timing}`;
}

function transformY(flag: boolean, dimension: number) {
    return flag ? `translateY(0)` : `translateY(${px(dimension)})`;
}

export {
    px,
    animation,
    transition,
    transformY,
    percentage
}