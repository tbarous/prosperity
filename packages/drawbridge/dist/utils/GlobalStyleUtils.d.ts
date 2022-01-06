import { FlattenSimpleInterpolation, GlobalStyleComponent } from "styled-components";
declare function extendGlobalStyle(extra?: FlattenSimpleInterpolation): GlobalStyleComponent<any, any>;
declare const GlobalStyledUtils: {
    extendGlobalStyle: typeof extendGlobalStyle;
};
export default GlobalStyledUtils;
