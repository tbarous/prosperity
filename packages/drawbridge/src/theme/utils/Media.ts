import {css, FlattenSimpleInterpolation} from "styled-components";

function up(breakpoint: string, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation {
    return css`
      @media screen and (min-width: ${breakpoint}) {
        ${styles}
      }
    `;
}

function down(breakpoint: string, styles: string): FlattenSimpleInterpolation {
    return css`
      @media screen and (max-width: ${breakpoint}) {
        ${styles}
      }
    `;
}

const Media = {
    up,
    down
}

export default Media;