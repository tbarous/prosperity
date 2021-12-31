import {createGlobalStyle, GlobalStyleComponent} from "styled-components";

const defaultGlobalStyle = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
`;

export function extendGlobalStyle(extra?: string): GlobalStyleComponent<any, any> {
    if (!extra) return createGlobalStyle`${defaultGlobalStyle}`;

    return createGlobalStyle`${defaultGlobalStyle} ${extra}`;
}

export default extendGlobalStyle;