import {css, FlattenSimpleInterpolation} from "styled-components";

function up(breakpoint: string, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
    return css`
      @media screen and (min-width: ${breakpoint}) {
        ${styles}
      }
    `;
}

function down(breakpoint: string, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
    return css`
      @media screen and (max-width: ${breakpoint}) {
        ${styles}
      }
    `;
}

const MediaUtils = {
    up,
    down
}

export default MediaUtils;