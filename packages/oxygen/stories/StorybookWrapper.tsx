// import React, {ReactElement} from "react";
// import styled, {css, } from "styled-components";
// import GlobalStyledUtils from "@tbarous/drawbridge/utils/GlobalStyleUtils";
// import Light from "@tbarous/drawbridge/theme/light/Theme";
// import ThemeProvider from "@tbarous/drawbridge/providers/ThemeProvider";
// import "../.storybook/assets/font/font.css";
//
// const GlobalStorybookStyle = GlobalStyledUtils.extendGlobalStyle(css`#root {
//   height: 100%;
// }`);
//
// export const Wrapper = styled.div`
// `;
//
// export const Wrapper2 = styled.div`
// `;
// const StorybookWrapper: React.FunctionComponent<any> = (props: any): ReactElement => {
//     const {children, className} = props;
//
//     return (
//         <Wrapper
//             className={className}
//         >
//             <GlobalStorybookStyle/>
//
//             <ThemeProvider theme={Light}>
//                 {children}
//             </ThemeProvider>
//         </Wrapper>
//     )
// }
//
// export default StorybookWrapper;