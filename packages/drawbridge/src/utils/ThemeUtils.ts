import {css} from "styled-components";

function px(s: string | number) {
    return `${s}px`;
}

function animation(animation: any, ms: number) {
    return css`${animation} ${ms / 1000}s`;
}

function transition(property: any, ms: number) {
    return css`${property} ${ms / 1000}s`;
}

export {
    px,
    animation,
    transition
}