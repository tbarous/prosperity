import { FlattenSimpleInterpolation } from "styled-components";
declare function up(breakpoint: string, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation;
declare function down(breakpoint: string, styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation;
declare const MediaUtils: {
    up: typeof up;
    down: typeof down;
};
export default MediaUtils;
