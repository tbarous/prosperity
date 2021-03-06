import {createGlobalStyle, css, FlattenSimpleInterpolation, GlobalStyleComponent} from "styled-components";

const defaultGlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

function extendGlobalStyle(extra?: FlattenSimpleInterpolation): GlobalStyleComponent<any, any> {
    if (!extra) return createGlobalStyle`${defaultGlobalStyle}`;

    return createGlobalStyle`${defaultGlobalStyle} ${extra}`;
}

const GlobalStyledUtils = {
    extendGlobalStyle
}

export default GlobalStyledUtils;