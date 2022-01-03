import {createGlobalStyle, css, GlobalStyleComponent} from "styled-components";

const defaultGlobalStyle = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html, body {
        height: 100%;
    }
`;

export function extendGlobalStyle(extra?: string): GlobalStyleComponent<any, any> {
    if (!extra) return createGlobalStyle`${defaultGlobalStyle}`;

    return createGlobalStyle`${defaultGlobalStyle} ${extra}`;
}

export default extendGlobalStyle;